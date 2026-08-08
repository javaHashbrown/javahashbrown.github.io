---
title: '手写bind'
date: '2020-06-17'
---

### 前端知识复习 code snippet

[Function.prototype.bind 标准](https://tc39.es/ecma262/#sec-function.prototype.bind)


> When the bind method is called with argument thisArg and zero or more args, it performs the following steps:
>
>1. Let Target be the this value.
>2. If IsCallable(Target) is false, throw a TypeError exception.
>3. Let F be ? BoundFunctionCreate(Target, thisArg, args).
>4. Let L be 0.
>5. Let targetHasLength be ? HasOwnProperty(Target, "length").
>6. If targetHasLength is true, then
>   a. Let targetLen be ? Get(Target, "length").
>   b. If Type(targetLen) is Number, then  
>       - If targetLen is +∞𝔽, set L to +∞.  
>       - Else if targetLen is -∞𝔽, set L to 0.  
>       - Else,  
>          + Let targetLenAsInt be ! ToIntegerOrInfinity(targetLen).  
>          + Assert: targetLenAsInt is finite.  
>          + Let argCount be the number of elements in args.  
>          + Set L to max(targetLenAsInt - argCount, 0).  
>7. Perform ! SetFunctionLength(F, L).
>8. Let targetName be ? Get(Target, "name").
>9. If Type(targetName) is not String, set targetName to the empty String.
>10. Perform SetFunctionName(F, targetName, "bound").
>11. Return F.

### 代码

```javascript

function myBind(thisArg,...args){
    var target = this;
    if(!isCallable(target)){
        throw new Type Error(target+'.bind is not a function')
    }

    var bound = function () {};
    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);

        if (this instanceof bound) {
            // constructor
            var result = target.apply(this, args.concat(bindArgs));
            if(Object(result)===result){
                // constructor call returns a object
                return result;
            }
            // returns an instance
            return this;
        } else {
            // ordinary function call
            return target.apply(thisArg, args.concat(bindArgs));
        }
    };
    // keep prototype chain
    bound.prototype = target.prototype;
    fBound.prototype = new bound();
    return fBound;
    
}

function isCallable(obj){
    return typeof obj === 'function';
}
```
