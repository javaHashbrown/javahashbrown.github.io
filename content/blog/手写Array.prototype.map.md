---
title: '手写Array.prototype.map'
date: '2020-05-20'
---

### 前端知识复习 code snippet

废话少说，先看标准

>

1. Let O be ? ToObject(this value).
2. Let len be ? LengthOfArrayLike(O).
3. If IsCallable(callbackfn) is false, throw a TypeError exception.
4. Let A be ? ArraySpeciesCreate(O, len).
5. Let k be 0.
6. Repeat, while k < len,
   - Let Pk be ! ToString(k).
   - Let kPresent be ? HasProperty(O, Pk).
   - If kPresent is true, then
     - Let kValue be ? Get(O, Pk).
     - Let mappedValue be ? Call(callbackfn, thisArg, « kValue, k, O »).
     - Perform ? CreateDataPropertyOrThrow(A, Pk, mappedValue).
   - Set k to k +1.
7. Return A.

### 代码

```javascript
Array.prototype.myMap = function(callbackfn, thisArg) {
  // this cannot be null or undefined
  if (this == null) {
    throw new TypeError('this is null or undefined');
  }
  var O = Object(this);
// convert O.length to integer 0
// e.g. undefined >>> 0 => 0
  var len = O.length >>> 0;
  // callbackfn must be a function
  if (typeof callbackfn != 'function') {
    throw new TypeError(callbackfn + ' is not a function');
  }
  var T = thisArg != undefined ? thisArg : undefined;
  var A = new Array(len);

  for (var k = 0; k < len; k++) {
    // iterate all property of O, including props in prototype chain
    if (k in O) {
      var kValue = O[k];
      var mappedValue = callbackfn.call(T, kValue, k, O);
      A[k] = mappedValue;
    }
  }
  return A;
};
```
