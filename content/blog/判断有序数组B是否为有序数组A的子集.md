---
title: '判断有序数组B是否为有序数组A的子集'
date: 2019-03-12
---

富途面试遇到的手写算法题：
2 个有序数组 A 和 B，只含有数字，每个数组内的元素都有可能重复。请写一个函数，判断 B 是否为 A 的子集。如果是，返回 true；反之，返回 false。
要求：不能用内置函数，不能转换为字符串等等做间接比较，算法效率越高越好。

### 题目分析

典型的数组类问题，有序这个条件已经降低很多难度了，题目难度至多相当于 LC Medium 的题目。

### 解题方法

有序+数组比较，很自然两个思路：

- Two Pointers
- Binary Search

现场做的时候选的 1，有几个 corner case 没考虑到，面试官指出来之后放过我了。

时间复杂度$\ O(n)$， 空间复杂度$\ O(1)$，简单说下思路：

1. 排除 corner case，B 为空，B 比 A 元素多，B 的元素范围超过 A 的范围等等；
2. 2 个 pointer，分别从 A，B 的第一个元素开始
3. A 的 pointer 一直前进，找和 B 当前相等的元素，直到找到或者抵达 A 的尾部
4. 如果找到相同元素，2 个 pointer 同时前进一位
5. 如果循环中 A 提前到达尾部，那么返回 false，如果 B 先到达尾部，跳出循环返回 true

现场写的代码如下，十分丑陋：

```javascript
/**
 * @param {sorted src array} a
 * @param {sorted target array} b
 */
var isSubset = function isSubset(a, b) {
  if (b.length == 0) return true;
  if (b.length > a.length) return false;
  var len1 = a.length,
    len2 = b.length;
  if (b[0] >= a[len1 - 1] || b[len2 - 1] <= a[0]) return false;
  var p1 = 0,
    p2 = 0;
  while (true) {
    while (a[p1] !== b[p2] && p1 < len1) p1++;
    if (p1 == len1) return false;
    p1++;
    p2++;
    if (p2 == len2) break;
  }
  return true;
};
```

其实可以写的更简单一点，这样理解就容易多了：

```javascript
var isSubset = function isSubset(a, b) {
  if (b.length == 0) return true;
  var p1 = 0,
    p2 = 0;
  while (p1 < a.length) {
    if (b[p2] == a[p1]) {
      p2++;
      if (p2 == b.length) return true;
    }
    p1++;
  }
  return false;
};
```

### Follow Up

LC 有一道题和这个很类似（[LeetCode 392] Is Subsequence）。
