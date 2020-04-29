---
title: 'RN Animated API使用'
date: '2018-03-29'
---

RN 也用了小一段时间了，之前都着重实现功能+赶工期，交互体验方面基本无暇顾及。  
最近项目周期不算太紧，于是小小试验了一下 Animated 的 API，模拟器上的效果还不错。
简单记录一下 API 的内容，以后备查：
---先挖坑，以后再填---

1. 组件

- 自带的有`Animated.View`, `Animated.Image`, `Animated.Text`  
  一般用上面的基本就足够了，或者基于上面 3 个自行封装新的动画组件
- 还可以用`createAnimatedComponent()`方法创建自定义的动画组件  
  用过方法包装自己封装的扩展`button`组件，动画效果没出来，不知道是不是因为自己的`button`用了其他非`Animated`组件的原因

2. API

- timing
- spring
- interpolate

3. 单个动画实现
4. 组合动画实现
