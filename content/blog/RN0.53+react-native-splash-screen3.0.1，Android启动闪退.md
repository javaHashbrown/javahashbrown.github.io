---
title: 'RN0.53+react-native-splash-screen3.0.1，Android启动闪退'
date: 2018-03-13
---

splash-screen 这个 RN 插件挺好用的，升级之后启动 Android 版 APP 就闪退
查了 issue 之后发现是文档没更新，在按照说明操作之后，还需要做额外调整：

[插件 github 地址](https://github.com/crazycodeboy/react-native-splash-screen)

1. MainActivity.java 修改为

```java{3}
SplashScreen.show(this);//原代码

SplashScreen.show(this, true);//修改成这样
```

2. 然后修改插件源代码
   在`node_modules> react-native-splash-screen> android> src> SplashScreen.java`

```java{3,4}
//原代码，删掉
mSplashDialog = new Dialog(activity, fullScreen ? R.style.SplashScreen_Fullscreen : R.style.SplashScreen_SplashTheme);
//修改为下面的
mSplashDialog = new Dialog(activity, R.layout.launch_screen);
```

之后就可以正常运行了
