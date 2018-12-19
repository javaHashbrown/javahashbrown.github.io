---
title: 'React-Navigation中去掉header下的阴影'
date: 2018-03-18
---

1. StackNavigator  
   在`navigationOptions`里修改`headerStyle`

2. TabNavigator  
   在`tabBarOptions`修改`style`

代码

```jsx
//Android
elevation：0
//iOS
shadowOpacity：0
```

最好在`navigator`定义时设置`navigationOptions`，否则在页面嵌套的时候容易冲突，可能设置不起作用
