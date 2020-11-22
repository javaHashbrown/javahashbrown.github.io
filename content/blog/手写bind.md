---
title: '手写bind'
date: '2020-06-17'
---

### 前端知识复习 code snippet

[instanceof 标准](https://tc39.es/ecma262/#sec-instanceofoperator)


>1. If Type(target) is not Object, throw a TypeError exception.
>2. Let instOfHandler be ? GetMethod(target, @@hasInstance).
>3. If instOfHandler is not undefined, then
>    - Return ! ToBoolean(? Call(instOfHandler, target, « V »)).
>4. If IsCallable(target) is false, throw a TypeError exception.
>5. Return ? OrdinaryHasInstance(target, V).

### 代码

```javascript

function myInstanceof(left,right){
    if(!isObject(right)){
        throw new Error('right-hand side of instanceof is not an object')
    }
    var instOfHandler = right[Symbol.hasInstance];
    if(instOfHandler){
        return Boolean(instOfHandler.call(right, left));
    };
    if(!isFunction(right)){
        throw new Error('right-hand side of instanceof is not callable');
    }
    if(!isObject(left)) return false;

    var proto = Object.getPrototypeOf(left);
    if(!isObject(proto)){
        throw new Error('prototype must be an object')
    }
    while(proto){
        if(proto === right.prototype){
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}

function isFunction(obj){
    return typeof obj === 'function';
}

function isObject(obj){
    return obj !== null && typeof obj === 'object' || isFunction(obj);
}
```
