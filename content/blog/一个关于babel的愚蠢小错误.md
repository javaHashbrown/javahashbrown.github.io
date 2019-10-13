---
title: '一个关于babel的愚蠢错误'
date: 2019-09-19
---

> #### TL;DR  
> babel不会打包node_modules里的文件，所以引入组件时，必须用组件打包后的代码

#### 问题描述
npm install安装了公司内部组件之后，使用时import了源文件，然后项目打包报错:

> `... UglifyJS unexpected token: punc <<(>> ....`

开始一直觉得奇怪，google一下是UglifyJS不认识ES6的代码，ES6肯定是babel处理的，自然问题出在babel上。 然后捣鼓了快半个小时，又是配.babelrc，又是安装各种babel-plugin。徒劳无功。

之后鼓起勇气，问了大佬，大佬一句话点醒梦中人： **为了加速打包，babel不会转译node_modules里的文件**

然后就没有然后了....

**babel不转译，那么源文件里的ES6语法就不会被转为ES5，而UglifyJS不认识ES6语法，所以打包报错...**


#### 总结
API dummy没有未来，自己还是太菜了，没有真正理解打包这个过程的真实含义，也没有理解很多webpack配置的背景。只是记住了怎么使用而已。一旦出现死记硬背场景之外的问题，就抓瞎了。

当然，公司组件没有按照commonJS弄个index.js入口文件以方便引入还是很坑的，吐槽结束。

技术进阶之路漫漫，我还要继续努力。


