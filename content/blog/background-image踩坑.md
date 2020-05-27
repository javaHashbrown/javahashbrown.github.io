---
title: 'background-image踩坑'
date: '2020-05-25'
---

### 现象

用了一个雪碧图，图片的真实宽高是 112px\*22px，对应了 4 种情况下的 4 个图标 A,B,C,D, 每个分别是 28pt\*22pt，折算到两倍屏就是 14pt\*11pt 的图标尺寸。

```css
.icon {
    width: 14px;
    height: 11px;
    background-image: url('path/to/icon');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: -42px -0px;//x为14的负整数倍，-42，-28，-14，0
}
```

@1x，@2x，@3x 整数倍 dpr 的屏幕显示都正常。但是某些 Android 手机的 dpr 不是整数，比如小米 9 是 2.75，发现显示的图标变形了，漏出其他部分的边缘，非常难看。

### 解决: 修改 background-size 属性值

把 background-size 设置为了图片的真实尺寸，按@2x 计算是 56pt\*11pt，之后显示一切正常了。


### 总结
使用pt指定图片显示尺寸，position使用px
