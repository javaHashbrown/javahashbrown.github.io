---
title: 'Mac桌面端webview打开页面失败排查'
date: '2020-10-12'
---

### 背景
公司产品的Mac桌面端使用webview打开公司PC端主页，主页上有多个Tab。  
其中一个Tab（以下简称`A Tab`，对应地址以下代称为：`https://correct.domain.com`）可以跳转到我负责的PC端页面（以下简称B页，对应地址`https://correct.domain.com/desktop`）。

### 问题描述
Mac开发同事反馈在Mac桌面端里点击`A Tab`无法成功跳转，变成了空白页面，而其他Tab都可以正常点击跳转。

### 排查过程
这个bug已知信息非常少，而且涉及到2个项目的代码，只有一步步排查了。

1. 查看bug是否可以复现  
Mac客户端内点击`A Tab`，页面确实变成空白，并且可以稳定复现。

2. 查看主页上的跳转链接是否正确  
浏览器inspect就可以直接看，链接正确。

3. 打开charles抓包Mac请求  
点击`A Tab`看如何跳转，结果发现了2条有意思的记录：

|url|状态码|
|:--|:-:|
|`https`://correct.domain.com|302|
|`http`://correct.domain.com/desktop|301|

302跳转是预期中的，从业务主域名跳转对应的PC端主页，但不知为什么本来该出现的https变成了http。

**所以可以定位问题了，点击确实可以跳转，但是因为出现了http链接，所以被webview拦截了。** 接下来只需要排查哪一步出现这个重定向就可以了。

> 注：苹果推出了[ATS](https://developer.apple.com/documentation/security/preventing_insecure_network_connections)，非https请求都会被拦截


4. 排查Nginx  
Nginx里只有如下的配置可能会影响到地址，但它只是重写http为https协议而已，并没有重定向到`/desktop`的功能。
```shell
rewrite      ^(.*)$ https://$host$1 permanent;
```

事实上在浏览器上如果同样点击A Tab，跳转过程会有如下3条记录：

|url|状态码|
|:--|:-:|
|`https`://correct.domain.com|302|
|`http`://correct.domain.com/desktop|301|
|`https`://correct.domain.com/desktop|200|

普通浏览器没有ATS机制，所以第2条http地址是可以301跳转到对应的https地址的。  

排除Nginx配置问题，只能是代码层面的问题了。

5. 排查代码  
先搜索后端代码，以`/desktop`为关键字，然后在PHP路由文件里找到下面这段代码，问题就在这一行了。

```php {4}
$url = $this->params["domain"].'desktop';
$params = $this->request->get();
if (!empty($params)) {
    $url = ['/desktop'];
    foreach ($params as $key => $val) {
        $url[$key] = $val;
    }
}
$this->redirect($url);
```


6. 交给后端同事改了一下这段代码，确保是https跳转，重新发布，bug消失

### 小结
后端路由代码疏忽，无意中返回了http地址。因为http地址在浏览器中表现正常，能够正常跳转，所以没发现这个bug。

总耗时：断断续续大约2小时
