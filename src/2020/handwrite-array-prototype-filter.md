---
title: '手写Array.prototype.filter'
date: '2020-05-22'
---

### 前端知识复习 code snippet

[array.prototype.filter 标准](https://tc39.es/ecma262/#sec-array.prototype.filter)

>1. Let O be ? ToObject(this value).
>2. Let len be ? LengthOfArrayLike(O).
>3. If IsCallable(callbackfn) is false, throw a TypeError exception.
>4. Let A be ? ArraySpeciesCreate(O, 0).
>5. Let k be 0.
>6. Let to be 0.
>7. Repeat, while k < len,
>    - Let Pk be ! ToString(k).
>    - Let kPresent be ? HasProperty(O, Pk).
>    - If kPresent is true, then
>       - Let kValue be ? Get(O, Pk).
>       - Let selected be ! ToBoolean(? Call(callbackfn, thisArg, « kValue, k, O »)).
>       - If selected is true, then
>           - Perform ? CreateDataPropertyOrThrow(A, ! ToString(to), kValue).
>           - Set to to to + 1.
>    - Set k to k + 1.
>8. Return A.

### 代码

```javascript


Array.prototype.myFilter = function(callbackfn,thisArg){
    // this cannot be null or undefined
    if(this == undefined){
        throw TypeError('Cannot read property filter of '+ this);
    }
    // callbackfn must be a function
    if(typeof callbackfn !== 'function'){
        throw TypeError(callbackfn + ' is not a function')
    }

    var O = Object(this);
    var len = O.length >>> 0;

    var A = [];
    // element index in O
    var k=0;
    // element index in A
    var to=0;
    // iterate O and store element that meets criteria in A
    for(;k<len;k++){
        if(k in O){
            var kValue = O[k]
            var selected = callbackfn.call(thisArg, kValue, k, O);
            if(selected){
                A[to++] = kValue;
            }
        }
    }
    return A;
}
```
