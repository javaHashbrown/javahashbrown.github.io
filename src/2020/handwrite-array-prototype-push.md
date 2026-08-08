---
title: '手写Array.prototype.push'
date: '2020-05-24'
---

### 前端知识复习 code snippet

[array.prototype.push 标准](https://tc39.es/ecma262/#sec-array.prototype.push)

>1. t O be ? ToObject(this value).
>2. Let len be ? LengthOfArrayLike(O).
>3. Let items be a List whose elements are, in left to right order, the arguments that were passed to this function invocation.
>4. Let argCount be the number of elements in items.
>5. If len + argCount > 253 - 1, throw a TypeError exception.
>6. Repeat, while items is not empty,
>    - Remove the first element from items and let E be the value of the element.
>    - Perform ? Set(O, ! ToString(len), E, true).
>    - Set len to len + 1.
>7. Perform ? Set(O, "length", len, true).
>8. Return len.

### 代码

```javascript
Array.prototype.myPush = function(){
    var O = Object(this);
    var len = O.length >>> 0;
    var argCount = arguments.length;
    // argCount or len may exceed MAX_SAFE_INTEGER, therefore argCount+len may not be safe
    // do not use argCount + len > Number.MAX_SAFE_INTEGER
    if(argCount > Number.MAX_SAFE_INTEGER - len){
        throw TypeError('Invalid array length')
    }

    for(var k=0;k<argCount;k++){
        O[len+k] = arguments[k];
    };
    len = len + argCount;
    O.length = len;
    return len;
}
```
