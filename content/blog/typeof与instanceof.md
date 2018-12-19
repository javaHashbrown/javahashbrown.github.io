---
title: 'typeof与instanceof'
date: 2018-10-22
---
- [date: 2018-10-22](#date-2018-10-22)
    - [typeof](#typeof)
    - [instanceof](#instanceof)

#### typeof
`typeof`可以用来测试变量的类型，语法是`typeof myVariable`，返回值为变量类型的字符串。一般来说，基本类型会返回描述基本类型的字符串，而对象则返回`'object'`字符串，但是有2个例外。  
下表简单测试了一下几个浏览器的控制台输出。

| 参数类型           | Chrome      | Firefox     | Edge        | IE11             |
| ------------------ | ----------- | ----------- | ----------- | ---------------- |
| typeof a           | typeof a    | typeof a    | typeof a    |
| var a=1            | 'number'    | 'number'    | 'number'    | 'number'         |
| var a='1'          | 'string'    | 'string'    | 'string'    | 'string'         |
| var a=null         | 'object'    | 'object'    | 'object'    | 'object'         |
| var a=undefined    | 'undefined' | 'undefined' | 'undefined' | 'undefined'      |
| var a=true         | 'boolean'   | 'boolean'   | 'boolean'   | 'boolean'        |
| var a=Symbol('1')  | 'symbol'    | 'symbol'    | 'symbol'    | 不支持Symbol类型 |
| var a={}           | 'object'    | 'object'    | 'object'    | 'object'         |
| var a=new Object() | 'object'    | 'object'    | 'object'    | 'object'         |
| var a=[]           | 'object'    | 'object'    | 'object'    | 'object'         |
| var a=new Array()  | 'object'    | 'object'    | 'object'    | 'object'         |
| var a=function(){} | 'function'  | 'function'  | 'function'  | 'function'       |
| var a=()=>{}       | 'function'  | 'function'  | 'function'  | 不支持箭头函数   |

>例外   
>1.基本类型null的typeof返回值为'object'，这是js里著名的一个bug  
>2.函数也是对象的一种，但是所有浏览器都单独返回'function'的具体类型，而不仅仅是'object'

因为例外1和2的存在，判断变量是否为对象时，至少要先检查变量是否为null以及变量是否为函数，否则会出错，比如下面这段代码就有bug：
```javascript
let a = null;
let b = ()=>{};
function isObject(input){
  if(typeof input == 'object'){
    console.log('I am an object!');
  }else{
    console.log('I am not an object~');
  }
}
isObject(a);//'I am an object!' 
isObject(b);//'I am not an object~'
```
有2种方法可以修复这个bug，一种是增加判断，排除null，同时增加function的情况；还有一种是使用`Object()`方法进行类型转换。
```javascript
//方法1
function isObject(input){
  if(input !==null && 
  (typeof input === 'function' || typeof input == 'object')){
    console.log('I am an object!');
  }else{
    console.log('I am not an object~');
  }
}
//方法2
//调用Object()方法，基本类型会转换为对应的包装类返回，null和undefined会变为空对象{}，对象直接返回
function isObject(input){
  if(input === Object(input)){
    console.log('I am an object!');
  }else{
    console.log('I am not an object~');
  }
}
```


#### instanceof
instanceof用来判断对象的类型  
1. 有原型为null的情况
   Object(null) instanceof Object
2. 有跨框架情况  
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof#instanceof_and_multiple_context_(e.g._frames_or_windows)
3. 跨框架解决方案
   - Object.prototype.toString.call(obj)
