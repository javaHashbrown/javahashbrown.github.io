---
title: 'HTML中自闭合Vue组件的bug'
date: 2019-10-12
---

### 写在前面

今天犯了个低级错误，页面新增加了一个vue组件，因为是直接在html里写的（需要用php的后端直出，没有用vue单文件的写法），在使用自闭合标记写法的情况下这个组件没有直接渲染，而是把它后面的div节点替换掉了。

### 背景信息

先假设这个组件的名字叫做BugComponent，模版内容大概是下面这样的

```html
<template>
	<div class="bug-component">
    <p>我是bug component</p>
  </div>
</template>
```



### bug试验

1. 自闭合组件在前：渲染替换节点

```html
...
<!-- 渲染前 -->
<div class="container">
	<bug-component />
	<div class="sibling">
    <p>我是示例文本</p>
	</div>
 </div>
...
```



这样就是今天遇到的bug情况，表现为组件替换掉了下面的div节点，这样渲染后最终的html是这样的



```html
...
<!-- 渲染后, sibling节点消失 -->
<div class="container">
	<div class="bug-component">
    <p>我是bug component</p>
  </div> 
 </div>
...
```



2. 自闭合组件在后：显示正常

```html
...
<!-- 渲染前 -->
<div class="container">
	<div class="sibling">
    <p>我是示例文本</p>
	</div>
  <bug-component />
 </div>
...
```



这种情况下，自闭合组件之下是上层节点标记的结束,这样表现为组件可以正常渲染，不会影响到上面的临近同级节点



```html
...
<!-- 渲染后，sibling节点保持不变，渲染BugComponent组件内容 -->
<div class="container">
	<div class="sibling">
    <p>我是示例文本</p>
	</div>
  <div class="bug-component">
    <p>我是bug component</p>
  </div>
 </div>
...
```



### 原因分析

用户看到页面，整个渲染过程粗略说可以分为2步：

1. 浏览器解析HTML标签
2. 挂载Vue并完成渲染



出问题的地方在第一步浏览器解析HTML标签，所以这个问题本质上是HTML解析问题。



具体解释如下：

- HTML5标准中的`Normal elements`不支持自闭合标签写法（包括自定义标签，但排除空标签和svg等特定标签），自闭合标签在解析时会被省略掉表示闭合的`/`，即`<bug-component />`实际上是当成`<bug-component>`来解析的

- 根据标准，`<bug-component>`就会被解析为标签的开始，这样浏览器会认为它缺少了标签结尾

- 关键的一步来了：**浏览器会在父标签的结尾前，自动补全当前标签的结尾**，所以自闭合标签在这样的机制下就变成了它后面兄弟节点的父节点

  ```html
  <!-- 原始html -->
  <div class="container">
      <bug-component />
      <div class="sibling">
        <p>我是示例文本</p>
      </div>
  </div>
  
  <!-- 浏览器补充后，实际html -->
  <div class="container">
      <bug-component>
          <div class="sibling">
            <p>我是示例文本</p>
          </div>
      </bug-component>
  </div>
  ```

- 这就是为什么在bug试验1的情境下，Vue渲染后的组件只剩下了组件模版的内容，而兄弟节点的内容消失了。因为对Vue来说，这个时候自闭合标签和它的兄弟节点都只是组件标记的一部分，都会被替换为组件模版

- 当自闭合标签是最后一个子节点的时候，也就是bug试验2的情景，自动补全结束标签不会影响到其他的兄弟节点，所以Vue渲染后就表现为一切正常



Done.



### 延伸阅读

其实Vue的官方文档已经说的很清楚了，自闭合组件只能出现在三种场合：

- Vue template
- 字符串模版
- JSX

因为HTML标准不支持，所以在HTML中不能使用自闭合组件，而且标记必须使用kebab-case

详见 [Vue风格指南: 自闭合组件 - 强烈推荐](https://cn.vuejs.org/v2/style-guide/#自闭合组件-强烈推荐)