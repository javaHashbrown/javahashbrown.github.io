---
title: '手写Array.prototype.reduce'
date: '2020-05-21'
---

### 前端知识复习 code snippet

废话少说，先看[标准](https://tc39.es/ecma262/#sec-array.prototype.reduce)

> 1. Let O be ? ToObject(this value).
> 2. Let len be ? LengthOfArrayLike(O).
> 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
> 4. If len is 0 and initialValue is not present, throw a TypeError exception.
> 5. Let k be 0.
> 6. Let accumulator be undefined.
> 7. If initialValue is present, then
>
>    - Set accumulator to initialValue.
>
> 8. Else,
>
>    - Let kPresent be false.
>    - Repeat, while kPresent is false and k < len,
>       - Let Pk be ! ToString(k).
>       - Set kPresent to ? HasProperty(O, Pk).
>       - If kPresent is true, then
>         - Set accumulator to ? Get(O, Pk).
>    - Set k to k + 1.
>    - If kPresent is false, throw a TypeError exception.
>
> 9. Repeat, while k < len,
>
>    - Let Pk be ! ToString(k).
>    - Let kPresent be ? HasProperty(O, Pk).
>    - If kPresent is true, then
>       - Let kValue be ? Get(O, Pk).
>       - Set accumulator to ? Call(callbackfn, undefined, « accumulator, kValue, k, O »).
>    - Set k to k + 1.
>
> 10. Return accumulator.

### 代码

```javascript
Array.prototype.myReduce = function(callbackfn, initialValue) {
  // this must not be null or undefined
  if (this == null) {
    throw new TypeError('Array.prototype.reduce called on null or undefined');
  }
  // callbackfn must be a function
  if (typeof callbackfn !== 'function') {
    throw new TypeError(callbackfn + ' is not a function');
  }

  var O = Object(this);
  var len = O.length >>> 0;

  var k = 0,
    accumulator = initialValue;
  // get initialValue
  find_initial: if (accumulator == undefined) {
    for (; k < len; k++) {
      if (k in O) {
        accumulator = O[k++];
        break find_initial;
      }
    }
    // end of iteration with no initialValue found, throw empty array error
    throw new TypeError('myReduce of empty array with no initial value');
  }

  // iterate array and merge results
  for (; k < len; k++) {
    if (k in O) {
      var kValue = O[k];
      accumulator = callbackfn(accumulator, kValue, k, O);
    }
  }
  return accumulator;
};
```
