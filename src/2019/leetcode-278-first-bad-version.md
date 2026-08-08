---
title: '[LeetCode 278] First Bad Version'
date: '2019-02-13'
---

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

### 题目类型分析

很明显属于查找算法题。  
题目要求 API 函数使用次数尽可能少，而且查找对象是自增的自然数序列，直接考虑 Binary Search。

### 解法

1. 生搬硬套 binary search 的解法

```javascript
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    var min = 0;
    var max = n;
    var mid;
    while (max >= min) {
      mid = Math.floor((max - min) / 2) + min;
      let result = isBadVersion(mid);
      if (result ^ isBadVersion(mid - 1)) {
        return mid;
      }
      if (result) {
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    }
  };
};
```

上面是硬套 binary search 形式的笨拙解法，通过 min 和 max 两个 pointer 逼近 target，以 mid pointer 及其前一个元素调用 API 的结果来判断 mid 是否为 bad version。

以本题的限制条件来看，上面这段代码中其实有一行逻辑不合理：`max=mid-1`，尽管它导致的副作用被`if (result ^ isBadVersion(mid - 1))`排除掉了。

**原因**：只有当 mid 为 bad version 时，max 才会被修改，但根据返回的信息，我们只能确认 mid 是 bad version，而它恰好有可能是第一个 bad version。因此更合理的写法应该是`max=mid`。这样修改之后，`if (result ^ isBadVersion(mid - 1))`这几行代码也不需要了，减少了代码行数，也减少了 API 调用次数。

结束了吗？还没有，循环的判断条件还要修改为`max>min`；否则当`max==min`的时候，程序就陷入死循环了。修改之后，当`max==min`时循环结束，任意返回二者之一就是答案（也可以重新计算`mid`，再将其返回，此时 `max,min,mid` 三者相等）。

现在结束了。

2. 按题目限制优化后的 binary search 解法

根据上面的思路，优化后的代码如下：

```javascript
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    var min = 0;
    var max = n;
    var mid;
    while (max > min) {
      mid = Math.floor((max - min) / 2) + min;
      if (isBadVersion(mid)) {
        max = mid;
      } else {
        min = mid + 1;
      }
    }
    return max;
  };
};
```

### 类似题目

1. [LeetCode 374] Guess Number Higher or Lower
2. [LeetCode 34] Find First and Last Position of Element in Sorted Array
3. [LeetCode 35] Search Insert Position
