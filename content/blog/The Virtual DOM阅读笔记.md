---
title: 'The Virtual DOM阅读笔记'
date: 2017-08-22
---

Dan Abramov 在 2018-11-24 发了一系列推文是说明 React 的本质。他提到 Virtual DOM 这个词该退休了，这个词并没有说清楚 React 到底是什么。React 本质是“UI 类型”，和 JS 中其他类型一样可以保存、修改和操作，可表现性才是它的本质，而不是通过 diff 来减少 DOM 更改。

=====以下的理解全部错误=========

#### React 出现的原因

因为前端页面大量的 DOM 操作，其中很大一部分是因为不必要的 DOM 更新。比如只是改了 10 个对象中的 1 个，在之前的框架下没变化的 9 个也不得不一起跟随刷新，显然这个 9 个操作是不必要的。有点像当年的 AJAX 的出现是为了解决网页部件的不必要更新一样，React 也是为了只更新变化的部分。  
减少了更新的部分，自然也就减少了更新 DOM 的操作，于是得到了性能的提高。

#### 实现的手段 Virtual DOM

React 实现了一个 Virtual DOM 的对象，可以认为是真实 DOM 的一个复制品，区别在于 virtual DOM 并不展现到屏幕上。
因为不必显示，virtual DOM 的更改速度快得多。通过更新 virtual DOM，再将 virtual DOM 的变化映射到真实 DOM，达到修改的目的。
感觉设计理念有那么一点像当年的微软做过的 DataSet,数据在内存中修改之后一次性提交，减少频繁的数据库操作，提高响应速度。

#### 更新 DOM 的流程

更新的时候先建立一个 T0 时刻的 pre-virtual DOM，然后开始更新，得到 T1 时刻 virtual DOM；
更新完毕比较 T0 和 T1 时刻的 virtual DOM 变化，这一步叫做 diffing
只将变化的部分提交到 DOM；
DOM 的变化引起显示的改变，更新完毕；

[原文链接](https://www.codecademy.com/articles/react-virtual-dom)
