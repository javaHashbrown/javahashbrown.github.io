---
title: '一次搞笑而深刻的bug调试'
date: 2018-05-04
---

#### 问题出现

> APP 某个页面加载时访问了 2 个 API，两者的返回数据都分别有`type`字段，用于区分对应的数据列表中项目的类别，前端界面再根据类别渲染不同的界面

这个时候问题出现了，第一个 API 一切正常，第二个 API 返回列表本应全是`type=1`的数据类型，但是每次返回的第一条数据都是`type=2`

#### 调试

1. 很自然打开`chrome devTool`，打印并查看后台返回数据，嗯，返回的数据`type=2`，看来是后台问题可能性较大

2. 再次确认，用`postman`请求一次接口看看返回数据，咦，怎么返回数据又对了，`type=1`，反复试了几次，还是对的

3. 换了一个 API 测试工具，结果和 2 一样，看样子应该是前端的问题了，而且应该是网络层的问题，而网络层是基于 axios 封装的，也就是说 axios 有问题？

4. 还是觉得需要首先排除后台原因，于是让后台同事打印出接口返回数据，对比之后发现和 API 工具结果一致，基本排除后端责任

5. 深入到封装的网络层查看`axios`返回的数据，链式函数里淘宝，分别打印了`response=>response.data`，二者数据一致错误，数据 bug 复现

6. 怀疑 axios 老版本不可靠，于是升级到最新版，继续测试，问题依旧

7. 开始 axios 请求的头部是`json`，移植之前封装的另一版本网络层代码，头部使用`arraybuffer`, 解码后`response`的数据与后台一致了，
   但是`response.data`数据仍错误，因为二者间只多了一次`JSON.parse`,定位问题在`JSON.parse`

8. 因为 JSON.parse 本身不会有问题，再次开始怀疑 bug 源于后端，返回的 json 字符串格式不标准导致解析错误，可用解析工具可以顺利解析出 json，这里没有问题

9. 病急乱投医，怀疑 2 个接口同时请求有问题，于是注释第一个正常 API 的所有网络访问代码，返回结果一致，看来接口没有相关性，问题独立出现在第二个接口上

10. 复制 API 调试工具的返回 json，同时网络层截断发往结果异常 API 接口的所有网络访问，把复制的 json 作为固定数据返回给
    `response`，错误依旧，问题确定位在前端了

11. 把 10 中的 json 里的 type 属性改名为 mode，axios 解析的数据正常了

12. 继续看 axios 封装内容，`.then(response=>{...})`同时打印`response， JSON.parse(response.data)`, 数据又正确了，并且打印出数据一致。
    基本排除 axios 错误的可能性，那么就只剩下前端页面代码 bug 这一种可能性了，开始从网络层逐渐向应用层排查

13. 最后可耻的在 reducer 里发现了自己写死的代码`response[0].type = 2`, 根源找到

**总耗时： 8 小时**

#### 原因

简单说就是 chrome 的 console.log 打印对象时，如果对象后续值被修改了，打印的值也会随之改变，除非打印时就立刻展开对象的所有属性

`stackoverflow`找到了问题，这个问题（或者说 bug）起源于 webkit 的一个 bug [`stackoverflow问题地址`](https://stackoverflow.com/questions/11284663/console-log-shows-the-changed-value-of-a-variable-before-the-value-actually-ch])

> Excerpts from the original bug report ([https://bugs.webkit.org/show_bug.cgi?id=35801]):
>
> Description From mitch kramer 2010-03-05 11:37:45 PST
>
> 1.  create an object literal with one or more properties
>
> 2.  console.log that object but leave it closed (don't expand it in the console)
>
> 3.  change one of the properties to a new value
>
> now open that console.log and you'll see it has the new value for some reason, even though it's value was different at the time it was generated.
>
> I should point out that if you open it, it will retain the correct value if that wasn't clear.

#### 规避方法

- 创建对象的一个深拷贝，使它不受后续的影响， 比如把对象转成字符串再读取回来

```JavaScript
JSON.parse( JSON.stringify( object ) )
```

> ## 应验了一句老话，眼见也未必为实，今天体会很深
