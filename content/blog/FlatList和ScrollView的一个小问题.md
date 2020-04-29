---
title: '使用FlatList(ScrollView)的一个小问题'
date: '2018-05-19'
---

##### 问题描述

列表 FlatList 直接放在 View 里面，无法 pull to refresh

##### 原因排查

因为 FlatList 基于 ScrollView 和 VirtualizedList 封装，查看了 ScrollView 的官方文档说明

> Keep in mind that **`ScrollViews must have a bounded height in order to work, since they contain unbounded-height children into a bounded container (via a scroll interaction)[1]`**.
> In order to bound the height of a ScrollView, either set the height of the view directly (discouraged)
> or make sure all parent views have bounded height. **`Forgetting to transfer {flex: 1} down the view stack can lead to errors here, which the element inspector makes easy to debug`**.

##### 解决方案

在 FlatList 外层的容器里加上`{flex：1}`

```jsx{1}
<View style={{flex:1}}>
  <FlatList
    ...
  />
</View>
```

##### 问题引申

1. FlatList 和 ScrollView 都必须包裹在有**确定高度**的容器内才能正常工作  
   所以，如果 FlatList 内嵌在 ScrollView 里，或者反之，内嵌的控件无法正常工作，因为 FlatList 或 ScrollView 都是不固定高度的。
   之前也遇到过类似情况，无意中将 FlatList 放在了基于 ScrollView 封装的容器里，只要上拉加载更多，就会出现 FlatList 无穷加载的情况
2. FlatList 和 ScrollView 都必须放在`{flex:1}`的容器里，否则无法正常工作
