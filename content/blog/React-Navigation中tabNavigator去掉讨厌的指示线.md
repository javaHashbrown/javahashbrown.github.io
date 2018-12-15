---
title: 'React-Navigation中tabNavigator去掉讨厌的指示线'
date: 2018-03-12
---

bottom 模式的 tabBar 也出现了 indicator（就是选中某个 tabbar icon 的时候，出现的那根线，一般是出现在 top 模式下的）
感觉很烦人，想去掉，开始自然想到把这根线调为透明

```jsx
tabBarOption: {
  indicatorStyle: {
    opacity: 0,
    }
}
```

发现不管用。

查了一下 issue，发现了下面这个解决方案：

```JSX
export const AppNavigator = TabNavigator(
 {
    screenA:  screen1
  },
  {
    screenB: screen2
  },
  {
     tabBarOptions: {
        renderIndicator: () => null//加上这句就不会渲染indicator了
     }
  }
}
```

搞定！
