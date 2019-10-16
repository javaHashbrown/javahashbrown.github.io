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
	<div>
    <p>
      我是bug component
    </p>
  </div>
</template>
```



### bug试验

1. 自闭合在前：渲染替换节点

```html
...
<!-- 渲染前 -->
<div class="container">
	<bug-component />
	<div class="target">
    <p>
      我是示例文本
    </p>
	</div>
 </div>
...
```

这种情况下，自闭合组件似乎会被浏览器解析到下一个`</div>`的位置，然后重新开始渲染

这样就是今天遇到的bug情况，挂载Vue组件的时候会把组件标记和临近的同层级标记视为一体，表现为组件替换掉了下面的div节点，这样渲染后最终的html是这样的

```html
...
<!-- 渲染后, target节点消失 -->
<div class="container">
	<div>
    <p>
      我是bug component
    </p>
  </div> 
 </div>
...
```



2. 自闭合在后：显示正常

```html
...
<!-- 渲染前 -->
<div class="container">
	<div class="target">
    <p>
      我是示例文本
    </p>
	</div>
  <bug-component />
 </div>
...
```

这种情况下，自闭合组件之下是上层节点标记的结束，浏览器会自动补足当前组件的结束标记。

这样表现为组件可以正常渲染，不会影响到临近的同层级节点（因为同层其他节点都在它上面）

```html
...
<!-- 渲染后，target节点保持不变，渲染BugComponent组件内容 -->
<div class="container">
	<div class="target">
    <p>
      我是示例文本
    </p>
	</div>
  <div>
    <p>
      我是bug component
    </p>
  </div>
 </div>
...
```



### 延伸阅读

其实Vue的官方文档已经说的很清楚了，自闭合组件只能出现在三种场合：

- Vue template
- 字符串模版
- JSX

因为HTML标准不支持，所以在HTML中不能使用自闭合组件，而且标记必须使用kebab-case

详见 [Vue风格指南: 自闭合组件 - 强烈推荐](https://cn.vuejs.org/v2/style-guide/#自闭合组件-强烈推荐)