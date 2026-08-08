---
title: 'null和undefined的比较'
date: '2018-05-03'
---

### 相同点

---

1. 均为基本类型
2. 都属于“假值”，用`Boolean()`转换类型后都为`false`
3. 使用`==`进行比较时，二者相等

看 2 个可能会遇到的情况：

```javascript
//例1
var a = null;
var b;
var c = 0;
if (!a) {
  console.log('abc'); //a 为 null
}
if (!b) {
  console.log('abc'); //b 为 undefined
}
if (!c) {
  console.log('abc'); //c 为 0
}

//例2
if (b == a) {
  console.log('a,b');
}
if (b === undefined) {
  console.log('b');
}
```

例 1 中，这几个值在 if 语句中都会被隐式转换为`boolean`类型，而且恰好都为假值，取反之后均为真，因此 三个 if 内部的 console 语句都可以执行。

如果要区分具体值，需要指明比较的对象。比如例 2 中第一个 if 语句，当 b 为`undefined`或`null`时，才判定为真；在第二个 if 语句中，只有当 b 为`undefined`时才判定为真，`null`也无法通过。

### 不同点

---

1. 类型不同，因此二者用`===`比较不相等，`typeof`的值也不同
2. 转换为 string，number 后，二者不相同

```javascript
//例3

undefined === null; //false

typeof undefined; //'undefined'
typeof null; //'object'

String(undefined); //'undefined'
String(null); //'null'

Number(undefined); //NaN
Number(null); //0
```
