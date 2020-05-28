---
title: '手写new'
date: '2020-05-28'
---

### 前端知识复习 code snippet

根据MDN，new主要做了4件事情
>The new keyword does the following things:
>
>1. Creates a blank, plain JavaScript object;
>2. Links (sets the constructor of) this object to another object;
>3. Passes the newly created object from Step 1 as the this context;
>4. Returns this if the function doesn't return an object.

因为new是操作符，没有办法直接实现，只有写一个`function myNew(constructor[, arguments])`的方法  
第一个参数是要构造函数，剩下的是待传入的parameter（也可以为空）


### 代码

```javascript
function myNew(){
    var constructor = Array.prototype.shift.call(arguments);
    // constructor不是函数，抛出错误
    if(typeof constructor != 'function'){
        throw TypeError(constructor+'is not a constructor');
    }
    // 取得要返回的this
    var instance = Object.create(constructor.prototype);
    // 取得constructor自身执行的返回值
    var ret = constructor.apply(instance, arguments);

    return typeof ret == 'object' && ret != null ? ret : instance;

}

```

### 一点问题
上面代码还是有个比较明显的问题：
`Object.create`是一个基于`new`的语法糖方法，所以myNew本质上还是调用了new，有点循环论证的意思