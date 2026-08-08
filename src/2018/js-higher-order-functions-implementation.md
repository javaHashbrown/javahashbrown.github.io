---
title: '几个JS高阶函数的简单底层实现'
date: '2018-10-07'
---

- [高阶函数](#%e9%ab%98%e9%98%b6%e5%87%bd%e6%95%b0)
- [Array.prototype.forEach](#arrayprototypeforeach)
- [Array.prototype.map](#arrayprototypemap)
- [Array.prototype.filter](#arrayprototypefilter)
- [Array.prototype.every](#arrayprototypeevery)
- [Array.protytype.some](#arrayprotytypesome)
- [Array.protytype.reduce](#arrayprotytypereduce)

#### 高阶函数

看了 FCC 的函数式编程章节才发现，原来 JS 里的几个高阶函数是典型的函数式编程思想的应用。不改变原值，总是返回新值以避免 side-effect。  
有点好奇这些函数的底层是如何实现的，干脆练练手，全部自己尝试写一遍。暂时考虑写简化版，所以会略去异常处理部分的代码，实现全部使用 ES5 的语法。

#### Array.prototype.forEach

```javascript
Array.prototype.simpleForEach = function(callback, thisArg) {
  var length = this.length;
  for (var i = 0; i < length; i++) {
    callback.call(thisArg, this[i], i, this);
  }
};
```

#### Array.prototype.map

```javascript
Array.prototype.simpleMap = function(callback, thisArg) {
  var newArr = [];
  var length = this.length;
  for (var i = 0; i < length; i++) {
    newArr.push(callback.call(thisArg, this[i], i, this));
  }
  return newArr;
};
```

#### Array.prototype.filter

```javascript
Array.prototype.simpleFilter = function(callback, thisArg) {
  var newArr = [];
  var length = this.length;
  for (var i = 0; i < length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
```

#### Array.prototype.every

```javascript
Array.prototype.simpleEvery = function(callback, thisArg) {
  var length = this.length;
  for (var i = 0; i < length; i++) {
    if (!callback.call(thisArg, this[i], i, this)) {
      return false;
    }
  }
  return true;
};
```

#### Array.protytype.some

```javascript
Array.prototype.simpleSome = function(callback, thisArg) {
  var length = this.length;
  for (var i = 0; i < length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return true;
    }
  }
  return false;
};
```

#### Array.protytype.reduce

```javascript
Array.prototype.simpleReduce = function(callback, initialVal) {
  var accumulator,
    length = this.length;
  if (initialVal === undefined) {
    //无初值：将首个元素赋给accumulator，并从index=1的元素开始循环
    accumulator = this[0];
    for (var i = 1; i < length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  } else {
    //有初值：将initialVal赋给accumulator，从index=0的元素开始循环
    accumulator = initialVal;
    for (var i = 0; i < length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};
```
