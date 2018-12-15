---
title: 'array.indexOf和array.includes'
date: 2018-10-03
---

- [date: 2018-10-03](#date-2018-10-03)
    - [一点微小差别](#一点微小差别)
    - [为什么](#为什么)
    - [结论](#结论)
    - [参考文献](#参考文献)

#### 一点微小差别

indexOf 和 includes 都可以用来判断数组是否包含某个元素，二者到底有什么区别呢？看一个例子:

```JavaScript
let a = [1,2,3,null,undefined,NaN];

if(a.indexOf(NaN)!==-1){
  console.log('using Array.indexOf: Found NaN in Array a!');
}else{
  console.log('using Array.indexOf: No NaN found in Array a~');
}

if(a.includes(NaN)){
  console.log('using Array.includes: Found NaN in Array a!');
}else{
  console.log('using Array.includes: No NaN found in Array a~');
}

//输出：
>'using Array.indexOf: No NaN found in Array a~'
>'using Array.includes: Found NaN in Array a!'
```

#### 为什么

二者内部使用的算法不同：

- indexof 内部使用全等操作符，即`===`进行比较；
- includes 内部使用的算法是`SameValueZero`；

全等操作符进行`NaN===NaN`比较时，必然返回`false`，所以`indexOf`无法判断数组内是否含有 NaN。

而`SameValueZero`的**规则 2.1**解释了原因：

1. `x,y`类型不同，返回`false`
2. `x,y`同为`number`类型，那么
   1. 同为`NaN`时，返回`true`
   2. 同为 0 时（不管 0 之前的符号），返回`true`
   3. 数值相等时，返回`true`
   4. 其他情况，返回`false`
3. `x,y`同为其他类型，仅在值相同时返回`true`

#### 结论

其实`indexOf`和`includes`二者的搜索机制差不多，只有比较算法不同。实际使用我倾向于后者，一方面因为前者这个隐含的坑，另一方面后者直接返回`true/false`，更加直观。

#### 参考文献

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
- https://www.ecma-international.org/ecma-262/7.0/#sec-array.prototype.includes
