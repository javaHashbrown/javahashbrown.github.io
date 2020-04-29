---
title: 'JSBridge的一点总结'
date: '2019-09-28'
---

### 写在前面

最近做了几个混合App开发的需求，涉及到了JSBridge，记录一下

### 一点总结

webview的URL最大长度，跟使用的浏览器内核有关，和客户端同学测试过是8182个字符，和chrome标称的长度一致，所以我司webview内核用的应该是chrome