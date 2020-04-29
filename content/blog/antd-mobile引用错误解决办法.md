---
title: 'antd-mobile引用错误解决办法'
date: '2018-03-09'
---

### 问题：

创建 APP 代码完整框架的时候，因为升级到了 2.x 版本的`antd-mobile`，报了下面错误

> 但是运行时出现依赖 react-dom 的错误
>
> > `"Unable to resolve module react-dom from /Users/xiesubin/Workspace/Project/seller-pad-rn/node_modules/rc-animate/lib/AnimateChild.js`

### 原因：

1.创建项目使用的`react-native init`，官方说明是

> 有人反映通过 `react-native init` 创建的项目在使用时可能会报 `Unable to resolve module react-dom` 的错误 ，
> 此时不妨安装 `babel-plugin-module-resolver` 试试~

2.issue 里有人分析是因为

> 查看`babel-preset-expo` 源码，发现比 `babel-preset-react-native` 多个插件 `babel-plugin-module-resolver`

所以没有用`babel-preset-expo`创建项目的话，需要加上`babel-plugin-import` 和 `babel-plugin-module-resolver`的引用

### 解决办法：

1.  `npm i antd-mobile`

2.  `npm i -D babel-plugin-import babel-plugin-module-resolver`

3.  `update .babelrc`:

```jsx
  {
    "presets": ["react-native"],
    "plugins": [["import", { "libraryName": "antd-mobile" }]],
    "env": {
      "development": {
        "plugins": ["transform-react-jsx-source"]
      }
    }
  }
```
