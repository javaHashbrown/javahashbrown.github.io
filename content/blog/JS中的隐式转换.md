---
title: 'JS中的隐式转换'
date: 2018-09-21
---

- [date: 2018-09-21](#date-2018-09-21)
    - [基本类型隐式转换](#基本类型隐式转换)
      - [基本类型转换为Boolean类型](#基本类型转换为boolean类型)
      - [基本类型转换为String类型](#基本类型转换为string类型)
      - [基本类型转换为Number类型](#基本类型转换为number类型)
    - [对象隐式转换为基本类型](#对象隐式转换为基本类型)
*****
#### 基本类型隐式转换
##### 基本类型转换为Boolean类型  

隐式转换相当于调用`Boolean(value)`方法，其底层实现为`ToBoolean(value)`方法，转换规则如下表:

| 数据类型  | 转换为true的值                   | 转换为false的值                    |
| --------- | :------------------------------- | :--------------------------------- |
| Boolean   | true                             | false                              |
| String    | 非空字符串<br>(`value.length>0`) | 空字符串''<br>(`value.length===0`) |
| Number    | 非零值                           | 0 或 NaN                           |
| Undefined | \\                               | false                              |
| Null      | \\                               | false                              |
| Symbol    | 任何值                           | \\                                 |
>注：转换为Boolean为false的值有：`'', false, 0, NaN, undefined, null`  

**例1**  
```javascript
Boolean('') //空字符串，0
Boolean(' ') //含有一个空格的字符串，1
```
<br><br>
##### 基本类型转换为String类型

隐式转换相当于调用`String(value)`方法，其底层实现为`ToString(value)`方法，规则如下表：

| 数据类型  | 转换为string的值                   |
| --------- | :--------------------------------- |
| Boolean   | true=>`'true'`<br>false=>`'false'` |
| Null      | `'null'`                           |
| Undefined | `'undefined'`                      |
| Number    | 数字的string值                     |
| String    | 不转换                             |
| Symbol    | 抛出`TypeError`异常                |
**例2**  
```javascript
String(false) //'false'
String(1.32e3) //'1320'
String(-Infinity) //'-Infinity'
String(NaN) // 'NaN'
```
<br><br>
##### 基本类型转换为Number类型

隐式转换相当于调用`Number(value)`方法，底层实现为`ToNumber(value)`方法，规则如下表：

| 数据类型  | 转换为number的值                                                                                                                                                                                                                                                                                                                                                |
| --------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Undefined | NaN                                                                                                                                                                                                                                                                                                                                                             |
| Null      | 0                                                                                                                                                                                                                                                                                                                                                               |
| Boolean   | true=> 1<br>false=>0                                                                                                                                                                                                                                                                                                                                            |
| Number    | 不转换                                                                                                                                                                                                                                                                                                                                                          |
| String    | 1.空字符串或仅有空格的字符串=>0<br>2.整数=>保留符号，忽略整数中的先导0，返回整数<br>3.浮点数=>保留符号，忽略先导0，返回浮点数<br>4.十六进制数=>返回相同大小的十进制数<br>5.二进制数=>返回相同大小的十进制数<br>6.八进制数=>返回相同大小的十进制数<br>7.科学记数法=>返回相同大小的十进制数<br>8.其他=>返回NaN<br>注：数字字符串中头尾2端的空白，转换时都将被忽略 |
| Symbol    | 抛出`TypeError`异常                                                                                                                                                                                                                                                                                                                                             |

**例3**  
```javascript
Number('') //0
Number('    ') //0
Number(' -1.33e3 ') //-1330
Number(' 0x10') //16
Number(' 1232 4345') //NaN
```
<br><br>
***
#### 对象隐式转换为基本类型  
对象转换为基本类型时：
1. 首先调用`ToPrimitive ( input [, PreferredType] )`方法，当`input`可转换为多种基本类型时，可选参数`PrefreredType`指定优先转换类型  
2. 随后调用`OrdinaryToPrimitive(input,hint)`方法，其中`hint`值由`PrefreredType`决定，且为以下之一：`["default", "string", "number"]`:  
    1. 如果`PrefreredType`值为`hint String`, 则 `hint`值为`"string"`，依次调用对象的`toString, valueOf`方法，直至返回值为基本类型
    2. 如果`PrefreredType`值为`hint Number`, 则 `hint`值为`"number"`，依次调用对象的`valueOf, toString`方法，直至返回值为基本类型
    3. 如果`PrefreredType`未指定, 则 `hint`值为`"default"`，按2步骤执行
    4. 如果上述执行完毕后，返回值仍不是基本类型，抛出`TypeError`异常 
>注：  
> 1.`Date`对象在转换时，其`PrefreredType`为`hint String`  
> 2.以上对象默认转换规则，如果对象重写了默认的`toString` 和/或 `valueOf`方法，致使无法返回基本类型，那么将抛出`TypeError`异常

**例4**  
```javascript
let a = {};
a+1 //'[object Object]1'
a.toString() //'[object Object]'

function Test(){
    this.valueOf = function(){return 112233}
}
a = new Test();
a+1 //112234
String(a) //'[object Object]'

function Test2(){
  this.toString = function(){return []};
}
a= new Test2();
a+1 //TypeError: Cannot convert object to primitive value 
```
- 上例中，先将a声明为空对象，`a+1`进行计算时，a按照规则2.3进行转换，先根据原型链调用`Object.valueOf()`方法，返回对象自身，然后继续调用`Object.toString()`方法返回值`'[object Object]'`，最后将a和数字1进行字符串拼接，得到结果；  
- 之后将a声明为`Test`类的实例对象，`Test`中重写了`valueOf()`方法，再次进行`a+1`计算时，按照规则2.3进行转换，此时`valueOf()`方法返回值为基本类型，不再继续调用`toString()`方法，于是结果变为`112234`；而调用`String(a)`将对象优先转换为`string`类型，仍然调用的是`Object.toString()`方法，结果与之前相同
- 再次声明`Test2`类，确保其2个方法都没有返回基本类型，再次计算实例`a+1`时，抛出了`TypeError`错误
