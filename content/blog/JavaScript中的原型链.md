---
title: 'JavaScript中的原型链'
date: 2019-03-24
---

### 原型链的基础概念

1. 任何对象都拥有`__proto__`属性，指向其 `构造函数 (constructor function)` 的 `原型 (prototype)` 对象

   > 例： 假设有数组对象 a，因为它是由数组构造函数`Array`创建的，那么`a.__proto__`将指向`Array.prototype`

   这里可以引申出 2 个推论：

   > 推论 1：因为构造函数也是函数，而函数是对象的一种，所以构造函数也是对象。它也有`__proto__`属性，`__proto__`指向构造函数之构造函数的原型；

   > 推论 2：构造函数的原型也是对象，所以它也有`__proto__`属性，`__proto__`应指向对象构造函数原型`Object.prototype`；

2. 任何构造函数都是 `函数 (Function)` 创建的实例，且拥有`prototype`属性，指向其对应的原型对象

   根据上面的内容和推论 1，可以得到另一个推论：

   > 推论 3：构造函数既是对象，又是函数实例，因此它不仅拥有`__proto__`属性，也拥有`prototype`属性

   > 推论 4：构造函数的`__proto__`属性指向它的构造函数原型`Function.prototype`, 它的`prototype`属性指向`<constructor>.prototype`

3) 构造函数的原型对象都有一个`构造函数(constructor)`属性，指向其对应的构造函数
   > 例：即 Array.prototype.constructor 将指向 Array

### 原型链关系图

![prototype chain](../../src/images/prototype-chain.png)

### instanceof 的原理

### 游离在原型链关系之外的对象
