---
title: 'Vue中v-if和v-show遇到的小问题'
date: 2019-11-02
---

同一个页面有多个相同组件，根据配置分别控制显隐，使用v-if时始终都只有第一个组件能取到props，第二个没有被初始化