---
title: 'Native Module xxx tried to override xxx native module错误解决办法'
date: 2018-03-13
---

安卓下又报了个错误

> `Native module SplashScreenModule tired to override SplashScreenModule for module name SplashScreenModule. If this was your intention, set canOverrideExistingModule=true`

## 错误原因

这是`Project\android\app\src\main\java\com\project\MainApplication.java`里面多引用了一个同名模块导致，可能是手动添加了一遍后又自动加了一遍，
删除掉多余的就好了

```java
 protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new SplashScreenReactPackage(),
            .
            .
            .
            new PickerPackage(),
            new SplashScreenReactPackage(),//删除这行就好了
            new RNDeviceInfo()
      );
    }
```
