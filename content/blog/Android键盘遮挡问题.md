---
title: 'Android键盘遮挡问题'
date: 2018-03-14
---

有时候需要键盘遮挡住屏幕的一部分，有时候不需要，可以配置`android\app\src\main\AndroidManifest.xml`文件  
`android:windowSoftInputMode="adjustResize"`可以让键盘推起页面  
`android:windowSoftInputMode="adjustPan"`会遮住

```xml
<activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenSize"
        android:windowSoftInputMode="adjustPan">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
```
