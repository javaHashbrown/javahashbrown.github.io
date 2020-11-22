---
title: 'HTTP缓存小结'
date: '2020-02-25'
---

### 常见相关HTTP Header
#### HTTP 1.0
- `Pragma`  
    与HTTP 1.1 `Cache-Control`对等，为了兼容而存在；  
    如果`Cache-Control`同时存在，Pragma会被忽略；  
    通常设置为`Pragma: no-cache`;

#### HTTP 1.1 Cache-Control  
HTTP 1.1引入请求头，用于控制缓存策略  

|HTTP header|说明|
|-:|:-|
|`public`|都可以缓存|
|`private`|必须保存在私有缓存中，不可保存在共享缓存，即不可保存在CDN节点|
|`no-cache`|保存缓存文件到磁盘，但未与源服务器验证前，不可使用|
|`no-store`|1.不保存缓存文件到磁盘，但可以保存到内存中，转发后会尽快删除；<br>2. 无法保证私密性；|
|`must-revalidate`|仅针对过期缓存，在未与源服务器验证前，不可使用|
|`max-stale`|1. 请求头，表示愿意接受设置的过期时间内的缓存；<br>2. `max-stale: 60`表示过期60秒内的缓存，客户端也可以接受|


> **注意`must-revalidate`与`no-cache`差别**  
> - 前者只要求验证已过期缓存
> - 后者不论缓存是否过期都需要验证；

    
### 缓存类别
#### 强缓存

|HTTP header|所属标准|说明|
|-:|:-:|:-|
|`Expires`|HTTP 1.0|1.HTTP日期时间戳<br>2. 优先级低于`Cache-Control: max-age`，如果后者出现`Expires`将被忽略<br>3.客户端本地时间会影响时间判定<br>4. 如果解析时间错误或时间格式错误，缓存将被认为已过期|
|`Cache-Control: max-age`|HTTP 1.1|1.表示缓存最大有效期，单位是秒<br>2.优先级高于`Expires`|
|`Cache-Control: s-maxage`|HTTP 1.1|1.和`max-age`类似，但用于控制共享缓存，即CDN的最大缓存有效期<br>2.优先级高于`max-age`和`Expires`|

> 强缓存命中，返回HTTP状态码200
#### 协商缓存

|HTTP header|所属标准|说明|
|-:|:-:|:-|
|请求头：`If-Modified-since`<br>响应头：`Last-Modified`|HTTP 1.0|1.HTTP日期时间戳<br>2. 优先级低于`Etag`，如果后者出现将被忽略<br>3.只能精确到秒，速度快于1秒的变化无法感知<br>4. 连续变化但最后内容未变，会导致频繁刷新更新时间，导致之前的缓存失效|
|请求头: `If-None-Match`<br>响应头: `Etag`|HTTP 1.1|1.表示文件指纹，变化只与文件内容有关<br>2.优先级高于`Last-Modified`<br>3.Etag生成与具体算法有关，分布式系统中每台机器可能会为相同文件生成不同的Etag，需要统一计算规则|

> 协商缓存命中返回HTTP状态码304，未命中会重新请求，成功返回200
### 使用场景
#### 静态文件  
变化较少的静态资源文件，如图片，或变化频繁但每个版本相对独立的静态资源文件，如js,css文件，尽量强缓存，并设置长有效期，通过hash或者类似方法区分不同文件版本，可以减少资源请求
#### html文件  
一般设置为`Cache-Control: no-cache`，要求每次回源验证，以确保每次用户访问到的都是最新版本的App；但并不绝对，有些时效性没那么强的内容，或者内容相对稳定、或者需要通过缓存减少服务器访问压力的场景，也可以结合使用`Cache-Control: max-age=xxx`  
- 前者例子见参考文献3
- 后者例子可见各类新闻网站，常见设置为`max-age=60`  
  因为新闻内容相对稳定，设置强缓存影响css和js文件的更新，并不影响内容阅读，用户感知不明显，且此设置有助于减少服务器访问压力
- 缺点：结合`max-age`的网站，通常会有多个版本同时运行在线上，比较难以定位线上问题
### 参考文献
[1] [RFC 7324](https://tools.ietf.org/html/rfc7234)  
[2] [RFC 7232](https://tools.ietf.org/html/rfc7232)  
[3] [Jake·Archibald: caching-best-practices](https://jakearchibald.com/2016/caching-best-practices/)