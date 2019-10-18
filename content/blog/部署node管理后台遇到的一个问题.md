---

title: '部署node管理后台遇到的几个问题'
date: 2019-10-10
---

### 写在前面

核心服务扩容，之前预定分配给node管理后台用的服务器不能用了。

不得不重新申请了一台服务器部署，结果部署成功后业务一直运行不起来，花了3天才排查到原因，真是尴尬。

这里记录一下，留作备忘。



### 背景信息

开始安装又卸载node的操作直接导致了后续业务运行失败，当然这是后话了

部署流程： 申请服务器 -> 配置CI和发布系统 -> 服务器安装node10 -> 兼容性考虑卸载node10 -> 安装node7 -> 发布业务



### 问题一： CI打包文件过期，发布失败

进入发布系统配置gitlab的发布分支，本以为这样就ok了，结果居然发布失败 - -！

查发布日志发现`Request failed with status code 404`

#### 排查过程

1. 查看gitlab-ci，执行正常
2. 重新打包，再次发布，继续报404
3. 下载gitlab-ci的文件，查看内容ok
4. 场外求助大佬，结果大佬查了一下jobs，告诉我因为过期，artifacts被移除了，所以发布失败...

>// 菜鸡和大佬的对话
>
>大佬： 这个job id对应的artifacts被移除了，应该过期了  
>菜鸡： 为什么再次打包生成了artifacts，发布还是失败呢？明明可以从gitlab里下载到最新打包的artifacts  
>大佬： 因为gitlab的API不保证多次打包取最新结果，它只是按job id取artifacts  
>大佬： 重新提交一次，重新生成一个commit id就可以了  
>菜鸡： （似懂非懂）谢谢大佬！  

#### 解决方案

1. 重新提交，刷新commit id，重新ci打包
2. 再次发布成功

#### 原因分析

再次问了大佬之后，终于弄明白了原因。  
gitlab只能通过API下载artifacts，而不是保存在固定文件路径里。所以公司自己弄了一个组件，通过拼接参数获得artifacts的下载地址，规则如下： 

1. 根据commit ID取最新的Pipeline ID
>### API - [Get a single commit](https://docs.gitlab.com/ee/api/commits.html#get-a-single-commit)
>
>Get a specific commit identified by the commit hash or name of a branch or tag.  
>
>```
>GET /projects/:id/repository/commits/:sha
>```
>
>返回的字段中的last_pipeline就是最新的pipeline id

2. 根据最新的Pipeline ID取第一个成功的Job ID
>### API - [List pipeline jobs](https://docs.gitlab.com/ee/api/jobs.html#list-pipeline-jobs)
>Get a list of jobs for a pipeline.
>
>```
>GET /projects/:id/pipelines/:pipeline_id/jobs
>```
>
>返回一个数组，根据status字段过滤掉执行失败Jobs，然后再取response[0]就是第一个成功的Job

3. 根据Job ID下载对应的artifacts
>### API - [Download a single artifact file by job ID](https://docs.gitlab.com/ee/api/jobs.html#download-a-single-artifact-file-by-job-id)
>
>Download a single artifact file from a job with a specified ID from within the job’s artifacts zipped archive. The file is extracted from the archive and streamed to the client.
>
>```
>GET /projects/:id/jobs/:job_id/artifacts/*artifact_path
>```
>返回要下载的artifacts文件流

**结论**: 当有多次打包的时候，因为pipeline id不会变化，只要之前有成功的jobs生成artifacts，那么按照上面的规则，artifacts下载API就会指向它。当artifacts过期被清除后，自然就无法找到文件了，因此接口状态返回404失败，如下表所示:

>### API - [Download a single artifact file by job ID](https://docs.gitlab.com/ee/api/jobs.html#download-a-single-artifact-file-by-job-id) 接口返回状态码
>
>|Status|Description|
>|---|---|
>|200|Sends a single artifact file|
>|400|Invalid path provided|
>|404|Build not found or no file/artifacts|



### 问题二：忘记配置线上数据库

> 这个实在是有点尴尬，但是部署的时候真的忘记了配置线上数据库

发布成功后打开线上地址，发现迎接我的是nginx欢迎页，当时就知道完蛋了

#### 排查过程

1. 登陆服务器，`pm2 list`，发现所有node进程状态都是`errored`
2. `pm2 show app_name`，查pm2的out和error日志
3.  发现`error log`里一堆 `Cannot read property 'models' of undefined`
4. 然后排查数据库相关的所有文件，发现没配置线上数据库- -
5. 因为数据库没配置，数据库对象为undefined，然后脚本自动生成的数据库表对象统统变成了 `property of undefined`，自然无法运行。

#### 解决方案

配置好线上数据库，然后再次发布，错误消失，终于看到业务界面了



### 问题三：多个PM2守护进程互相干扰

进入业务界面后，发现首页列表接口一直报错，提示`api request error. Request failed with status code 403`

403显然是没有权限，这个错误消息看的我一脸懵逼...

#### 排查过程

1. 错误消息显然不是我包装的，那只能来自其他地方

   因为列表请求分为2个步骤，第一步取数据库数据，第二步请求接口服务的数据，所以最可能的地方有2个：一是数据库请求报错了；二是列表接口调用的公司接口服务报错了

   

2. 排查数据库错误

   进一步试验发现不仅列表接口报错，新建接口也报了同样的错误。

   - 难以确定是否是数据库错误的情况下，查了数据库的数据，发现尽管新建接口报错，但是新建的数据都已经写入了数据库，似乎与数据库没关系

   - 登陆服务器，继续排查列表接口，数据库请求操作那里打印数据，重启业务应用`pm2 restart app_name`，再次请求后查看日志，发现数据库请求能正常返回数据，基本排除数据库错误

     

3. 排查接口服务错误

   既然数据库错误可以排除，那么自然开始排查接口服务错误

   - 在接口服务请求前后打印日志，做个标记，看看是否请求会报错，以及如果请求成功会返回什么数据

   - 重启业务应用，再次请求接口后查看日志，发现日志只有接口服务请求前的输出，然后就报错了

   - 基本上可以确定是请求接口服务导致的错误

     

4. 接口服务大佬帮忙看日志

   到这一步我已经没什么办法了，只能跪求负责接口服务的大佬帮我看一下他那边的日志。

   >  这个接口服务是需要授权的，线上和测试环境都有独立的授权key，通过key+请求时间，应该就可以找到原因

   

   结果接口服务的日志里根本没有业务应用的任何请求，我当时的内心是崩溃的...

   

   - 大佬继续帮忙排查授权key，没发现问题
   - 排查接口服务初始化的代码，没发现问题
   - 排查传入接口服务的参数，没发现问题
   - 大佬上服务器直接用node调用代码请求接口服务，居然好了，可以获取数据，同时接口服务的日志也记录到了这个请求

   

   到这里，接口服务肯定是正常的，我的代码应该也是正常的，基本上只能是业务应用部署环境的原因了

   

5. 停止pm2，裸跑node

   考虑到大佬直接用node调用代码请求是成功的，我也照猫画虎，先停掉所有pm2的服务`pm2 stop app_name`，然后用node启动业务应用`NODE_ENV=production node app_server.js`

   见证奇迹的时刻到了，这样启动的业务完全正常，没有报任何错误，那么可以肯定问题来自于pm2了，下面继续排查

   

6. 起动单进程pm2

   为了排除pm2多进程间互相影响的可能性，我修改了pm2生产环境的配置文件，把它的进程数限制为1。

   然后就是套路操作，为了避免缓存影响，先停止服务，再删除当前应用，最后重新启动应用。

   访问应用页面，依然报错...我又崩溃了

   

   不过这一步再次确认了pm2就是问题根源，继续排查

   

7. 终于排查到错误

   经过大佬提示，查看了pm2相关的所有进程`ps aux | grep pm2`，发现居然有2个`pm2 God Daemon`守护进程

   大佬说很有可能问题就在这里了。

#### 解决方案

杀掉多余的pm2 God Daemon守护进程，重启pm2服务，再次访问，终于不报错了...

#### 原因分析

都是最开始安装再卸载node10的锅。

咨询了运维大佬，告诉我服务器安装node的时候会安装nodejs，pm2和pm2-logrotate日志切片服务，**卸载的时候会直接卸载nodejs服务，同时删除pm2的目录，但好像不会杀掉pm2的进程**

所以安装node7的时候，前一个pm2的进程还在运行，安装完成后2个pm2进程互相干扰。细节就不清楚了，反正对接口服务的请求在这样的情况下根本就没发出去。哎...

**总耗时：断断续续花了3天**



### 反馈运维：bug重现试验

为了得到确切的结论：

	- 服务器卸载时是否会杀掉pm2进程
	- 遗漏杀掉前一个pm2进程，而直接安装新的node是否导致了问题三的bug

和运维大佬沟通了一下，决定试试能否重现bug，这样运维大佬可以有针对性的更改部署脚本，避免下次还有人跟我踩一样的坑。

一共做了2次试验，第一次是为了复现bug，第二次是为了排除bug，确定具体bug源究竟在哪里。

1. 第一次：复原bug过程

- 准备工作：停止pm2服务，杀掉所有pm2关联进程，卸载node及相关组件服务
- 恢复初始状态：安装node10 -> 卸载node10 -> 安装node7(可能需要运维介入) -> 发布业务
- 查看是否复现bug

2. 第二次：消除bug，一次性顺利安装

- 准备工作： 在第一次的基础上，停止pm2服务，杀掉所有pm2关联进程，卸载node及相关组件服务
- 安装node10
- 停止所有pm2相关服务，杀掉pm2关联进程，卸载node10
- 安装node7
- 发布业务，观察是否顺利部署

**未完待续...**

