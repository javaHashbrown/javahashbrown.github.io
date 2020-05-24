---
title: '手写Array.prototype.every'
date: '2020-05-24'
---

### 前端知识复习 code snippet

[array.prototype.every 标准](https://tc39.es/ecma262/#sec-array.prototype.every)

>1. Let O be ? ToObject(this value).
>2. Let len be ? LengthOfArrayLike(O).
>3. If IsCallable(callbackfn) is false, throw a TypeError exception.
>4. Let k be 0.
>5. Repeat, while k < len,
>    - Let Pk be ! ToString(k).
>    - Let kPresent be ? HasProperty(O, Pk).
>    - If kPresent is true, then
>       - Let kValue be ? Get(O, Pk).
>       - Let testResult be ! ToBoolean(? Call(callbackfn, thisArg, « kValue, k, O »)).
>       - If testResult is true, return false.
>   - Set k to k + 1.
>6. Return true.

### 代码

```javascript
Array.prototype.myEvery = function (callbackfn, thisArg) {
    if (this == undefined) {
        throw TypeError('Cannot read property filter of ' + this);
    }
    if (typeof callbackfn !== 'function') {
        throw TypeError(callbackfn + ' is not a function');
    }

    var O = Object(this);
    var len = O.length >>> 0;
    for (var k = 0; k < len; k++) {
        if (k in O) {
            var kValue = O[k];
            if (!callbackfn.call(thisArg, kValue, k, O)) return false;
        }
    }
    return true;
};
```
