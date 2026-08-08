---
title: '手写Array.prototype.pop'
date: '2020-05-24'
---

### 前端知识复习 code snippet

[array.prototype.pop 标准](https://tc39.es/ecma262/#sec-array.prototype.pop)

>1. Let O be ? ToObject(this value).
>2. Let len be ? LengthOfArrayLike(O).
>3. If len is zero, then
>    - Perform ? Set(O, "length", 0, true).
>    - Return undefined.
>4. Else,
>    - Assert: len > 0.
>    - Let newLen be len - 1.
>    - Let index be ! ToString(newLen).
>    - Let element be ? Get(O, index).
>    - Perform ? DeletePropertyOrThrow(O, index).
>    - Perform ? Set(O, "length", newLen, true).
>    - Return element.

### 代码

```javascript
Array.prototype.myPop = function () {
    var O = Object(this);
    var len = O.length >>> 0;

    if (len == 0) {
        O.length = 0;
        return undefined;
    } else {
        var element = O[--len];
        delete O[len];
        O.length = newLen;
        return element;
    }
};
```
