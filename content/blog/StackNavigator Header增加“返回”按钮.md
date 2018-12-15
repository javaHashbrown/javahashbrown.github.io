---
title: 'StackNavigator Header增加“返回”按钮'
date: 2017-09-26
---

StackNavigator 自带了 navigationOptions 属性，但必须以静态对象申明

实现有 3 个要点：

1. navigationOptions 对象里，创建{param}常量，然后 headerLeft 或者 headerRight 里配置好闭包函数  
   这样做是因为 navigation 是类的实例成员，无法通过类成员访问，所以需要用闭包绕开这一限制
1. 在 DidMount 事件中配置 params 的闭包函数对象
1. 页面跳转的执行函数

```JSX
static navigationOptions = ({navigation}) => ({
      const {params} = navigation.state;
      title: 'PlayGround',
      headerRight: <View />,//之前提到过，占位的用的空view
      headerLeft:
        <Button
          //用闭包传递navigation
          onPress={
            params.handleNavigation && params.handleNavigation()}
        />,
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitleStyle: {
        textAlign: "center",
        alignSelf: "center",
        fontSize: 16,
      }
  });
  //页面跳转执行函数
  toOtherScreen(){
    this.props.navigation.navigate('pageDest');
  }

  componentDidMount(){
    this.navigation.setParams(
      handleNavigation: ()=>{this.toOtherScreen()}
    )
  }
```
