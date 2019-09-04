---
title: '[LeetCode 88] Merge Sorted Array'
date: 2019-02-12
---

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

### 题目类型分析

Merge Sort 算法题目，尽可能往这个方向上考虑具体思路。  
如果不能第一时间想到 Merge Sort 说明数据结构和算法基础需要复习，补好基础继续解题才是正确的路。

### 解法

现有条件相当于 merge sort 剩最后 2 个子数组，直接比较各自元素再 merge 。  
**题目有限制，要求直接修改 nums1，如果使用额外空间会报错**，需要对合并步骤做一些调整。
题目说明 nums1 长度足够，从数组尾部开始，从后往前向 nums1 中复制元素就可以了，步骤如下：

- 比较 nums1 和 nums2 初始尾部元素大小，大的那个移动到 nums1 未使用的尾部
- 重复以上步骤，依次把二个子数组当前最大元素复制到 nums1 的尾部，直至二者其中之一所有元素都已复制
- 因为是将 nums2 元素合并到 nums1 中，所以只需要考虑剩余数组是 nums2 的情况，继续赋值 nums2 的元素，直至将 nums1 数组填满
- 新的 nums1 就是合并后的结果，结束

### 类似题目

不同数据结构的类似题目

1. [LeetCode 21] Merge Two Sorted List
2. [LeetCode 617] Merge Two Binary Trees
