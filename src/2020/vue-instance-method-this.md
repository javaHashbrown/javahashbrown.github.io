---
title: 'Vue实例方法的this指向'
date: '2020-06-09'
---

### 背景
做Code Review的时候遇到一段Vue的SFC代码，需要在mounted生命周期里绑定document的scroll事件  

下面这段代码的问题有哪些？  

```javascript
export default {
    methods:{
        testThis(){
            console.log(this);
        }
    },
    mounted(){
        const vm = this;
        window.addEventListener.add('scroll',vm.testThis);
    }
}
// 窗口滚动后输出是什么？
```  

### 另一个例子
再看一个其他例子

```javascript
const obj = {
    a(){
        console.log(this);
    },
    b(){
        window.addEventListener('scroll',this.a);
    }
}

// 全局作用域下执行
obj.b()
// 窗口滚动后输出是什么？
```

### 答案

1. 第一个console输出的是Vue实例
2. 第二个console输出的是window

### 原因
- 第二个console的才是正常的情况

    根据[MDN的文档](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#The_event_listener_callback),执行event handler的时候，如果没有指定this对象，那么this指向event listener的对象，即指向window。

- 在第一个console里，Vue肯定帮我们做了些事情

    经过查看源码，发现Vue在初始化方法`initMethods`的时候，为每一个方法都做了this绑定。
    
    ```javascript
    function(vm, methods){
        ...
        for(var key in methods){
            ...
            vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key],vm);
        }
    }
    ```

### 第一段代码的问题
最后再说会Code Review的问题，有2个错误：
- 用了this被shadowing的方法，来处理this指向问题，属于概念不清
- 在不清楚this指向问题的时候，没有用bind来绑定this

结论
- Vue实例方法中，只要不存在this shadowing的情况，直接传`this.[method]`就可以了
- 不清楚this指向，`this.[method]`内部又使用了`this.xxx`需要确认this指向关系的，可以用bind方法绑定后再传入

以上～