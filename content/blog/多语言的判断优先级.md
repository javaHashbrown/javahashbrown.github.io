---
title: '多语言的判断优先级'
date: '2020-03-05'
---

### 写在前面
最近增加Node多语言的支持，后端获取语言参数的优先级有点不清楚  
特意查了些文档，在这里记录一下

### 优先级

1. Domain: 顶级域名（TLD, Top Level Domain），如.cn, .de等
2. Subdomain: 子域名，如`cn.amazon.com`
3. Subdirectory: URL里增加path，如`www.mozilla.org/en-US/`
4. 其他: 以下不分先后，可自定义优先级
   - URL parameter: 如`www.example.com?lang=en-US`
   - HTTP header: `Accept-Language`: 可在浏览器语言偏好里设置，请求时会将此信息带上`'Accept-Language: en;q=0.8,es;q=0.6,fr;q=0.4'`
   - User Agent: 一般用在App内，语言参数名称可能不标准，而且变更可能比较频繁，比如Facebook的UA里表示语言的属性是user-lang
   - Cookie: 语言参数名也可能不标准，变更也可能比较频繁，现在好像用的越来越少了
5. IP查找: 以上都失效的时候，后端还可以考虑使用IP查找检测对应语言，准确率较低
6. 自定义标准: 还可以自定义规则覆盖以上的设置

暂时这么多，以上
