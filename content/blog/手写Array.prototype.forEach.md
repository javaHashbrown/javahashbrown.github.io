---
title: '手写Array.prototype.forEach'
date: '2020-05-23'
---

### 前端知识复习 code snippet

[array.prototype.foreach 标准](https://tc39.es/ecma262/#sec-array.prototype.foreach)

>1. Let O be ? ToObject(this value).
>2. Let len be ? LengthOfArrayLike(O).
>3. If IsCallable(callbackfn) is false, throw a TypeError exception.
>4. Let k be 0.
>5. Repeat, while k < len,
>    - Let Pk be ! ToString(k).
>    - Let kPresent be ? HasProperty(O, Pk).
>    - If kPresent is true, then
>       - Let kValue be ? Get(O, Pk).
>       - Perform ? Call(callbackfn, thisArg, « kValue, k, O »).
>   - Set k to k + 1.
>6. Return undefined.

### 代码

```javascript


Array.prototype.myForEach = function (callbackfn, thisArg) {
    // this must not be null or undefined
    if (this == null) {
        throw new TypeError(
            'Array.prototype.forEach called on null or undefined'
        );
    }
    // callbackfn must be a function
    if (typeof callbackfn !== 'function') {
        throw new TypeError(callbackfn + ' is not a function');
    }

    var O = Object(this);
    var len = O.length >>> 0;

    var k = 0;
    // iterate array
    if (thisArg === undefined) {
        for (; k < len; k++) {
            if (k in O) {
                var kValue = O[k];
                callbackfn(kValue, k, O);
            }
        }
    } else {
        for (; k < len; k++) {
            if (k in O) {
                var kValue = O[k];
                callbackfn.call(thisArg, kValue, k, O);
            }
        }
    }

    return undefined;
};

```
