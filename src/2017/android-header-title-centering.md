---
title: 'header title在Android下不居中问题的解决技巧'
date: '2017-09-22'
---

页面用了 stackNavigator，header left 加了一个 button，header titleStyle 也设置了居中

iOS 下没有问题，但是在 Android 下发现 title 向右偏移

#### 系统版本

- RN 0.47.2
- NODE 8.4
- NPM 4.6.2

#### 解决办法

header right 增加一个空的 view 占位，之后就可以保证 title 在 Android 下居中了
