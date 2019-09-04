---
title: 'node开发遇到的一个小坑'
date: 2019-09-03
---

### 写在前面

大前端之路又迈出了坚实一步。

leader架不住我们前端切图仔的各种游说，终于决定了上node。马上就可以写node接入层了，后端哥们可以专心开发微服务，切图仔们也可以想要什么数据字段就用什么了，毕竟求人不如求己。

leader给我分配了搭建框架的任务，以公司内部koa2+vue框架为基础，自己改改应该就可以了。毕竟只是个管理后台，做成MPA方便编译、迁移和维护。SPA页面数量过多，热更新直接爆内存堆，之前体会过一次，不想再碰。

### 踩坑记录

搭框架自然要区分各种运行环境，开发、测试、生产自然是标配。界面上会根据环境不同给一些信息提示，在node里很自然就要写这样的语句`env = process.env.NODE_ENV `来判断当前所处的环境。

用的现成框架，却在EJS条件渲染视图文件的时候总是失败，始终没有触发到我想要的逻辑分支。看了几分钟，开始看页面env变量的值。

结果居然发现框架里是这么写的

```javascript
const env = JSON.stringify(process.env.NODE_ENV || 'development')
```

而我的模板条件渲染语句是这么写的

```javascript
<% if(env=='development') {%>
    //do something 
<% } %>
```

打印一看，当然不能进入分支逻辑

```javascript
var a = JSON.stringify('development'); // '"development"'
var b = 'development'; // 'development'
a == b; // false
a === b; // false
```

框架大佬多此一举用了`JSON.stringify`，把字符串`'development'`变成了有额外双引号的字符串`'"development"'`，二者的比较自然变成了`develpment`和`development+双引号`的比较，永远不会相等，不管使用`严格相等===`还是`转换类型相等==`



**踩坑记录完毕**