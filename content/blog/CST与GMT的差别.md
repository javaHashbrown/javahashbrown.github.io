---
title: 'CST与GMT的差别'
date: 2018-05-15
---

- [date: 2018-05-15](#date-2018-05-15)
    - [问题描述](#问题描述)
    - [排查过程](#排查过程)
    - [CST & GMT 冷知识](#cst--gmt-冷知识)
    - [问题解决](#问题解决)
    - [反思](#反思)

#### 问题描述

今天偶然发现了一个问题，JAVA 后台返回的时间字符串解析后居然比原始数据差了 14 个小时  
后台时间字符串：`Thu Feb 17 16:31:52 CST 2018`  
前端解析时间： `Sun Feb 18 2018 06:31:52 GMT`

#### 排查过程

1. 前端传的是时间戳，后台自己并没有处理，而且显示的时间与前端传的时间完全一致
2. 只有后台再发送给前端之后时间显示才出现问题，妥妥前端的锅

再看一眼 2 个字符串的样子，很自然想到不一致来源于 CST 和 GMT 这两种不同标准

#### CST & GMT 冷知识

google 了一下，CST 可以代表以下几个时间：

- `Central Standard Time (USA) UT-6:00`
- `Central Standard Time (Australia) UT+9:30`
- `China Standard Time UT+8:00`
- `Cuba Standard Time UT-4:00`

换句话说，CST 可以代表 4 个不同的时区，而 GMT 只代表格林尼治标准时间

那么很显然问题的原因找到了：

- `JAVA`认为`CST`代表的是`China Standard Time +8`
- `而Javascript`认为`CST`代表的是`Central Standard Time (USA) -6`

所以前端计算时才有了`8-(-6)=14`小时的时差

#### 问题解决

写了个简单的方法处理了时差问题

```javascript
const dateCstToGmt = dateString => {
  let aDate = new Date(dateString);
  const hour = aDate.getHours();
  aDate.setHours(hour - 14);
  return aDate;
};
```

#### 反思

- 最优方案：最好统一用时间戳，这样前后台解析都不会有错
- 次优方案：如果一定要用时间字符串，那么用没有歧义的 GMT 时间比 CST 时间来得可靠
