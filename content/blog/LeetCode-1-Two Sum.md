---
title: '[LeetCode 1] Two Sum'
date: 2019-02-28
---

Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **_exactly_** one solution, and you may not use the same element twice.

**Example:**

> Given nums = [2, 7, 11, 15], target = 9,
>
> Because nums[0] + nums[1] = 2 + 7 = 9,
> return [0, 1].

### 题目类型分析

Two Sum 可以说是 LC 最经典的题目，没做过 Two Sum 甚至都不好意思说自己刷过 LC。每次看到这道题都会想起自己刷题初期的窘迫，百感交集。

这道题没有什么复杂的规则，属于数据结构应用。

### 解法

1. 暴力解法

   什么也不想的情况下，第一反应肯定是 brutal force ，2 个 for 循环就完事了。时间复杂度 $\ O(n^2)$, 效率实在不高。

   ```javascript
   var twoSum = function(nums, target) {
     var res = [];
     for (let i = 0; i < nums.length; i++) {
       for (let j = i + 1; j < nums.length; j++) {
         if (nums[i] + nums[j] == target) {
           res[0] = nums[i];
           res[1] = nums[j];
         }
       }
     }
     return res;
   };
   ```

2. hashmap 两次遍历

   换一个思路，可以用空间来换时间，先遍历数组，在 hashmap 里建立元素索引，然后再遍历数组，在 hashmap 里找对应元素的配对。这样就把时间复杂度降低到了$\ O(n)$，当然空间复杂度也提升到了$\ O(n)$。

   ```javascript
   var twoSum = function(nums, target) {
     var map = {},
       res = [];
     //建立索引
     for (let i = 0; i < nums.length; i++) {
       if (map[nums[i]] == undefined) map[nums[i]] = i;
     }
     //查找配对元素
     for (let i = 0; i < nums.length; i++) {
       let residual = target - nums[i];
       if (map[residual] != undefined && map[residual] != i) {
         res.push(map[residual]);
         res.push(i);
         break;
       }
     }
     return res;
   };
   ```

3. hashmap 一次遍历

   解法 2 当然可以再优化一下，只需要一次遍历就可以找到结果。少了一次遍历，时间复杂度和空间复杂度同上。

```javascript
var twoSum = function(nums, target) {
  var map = {},
    res = [];
  for (let i = 0; i < nums.length; i++) {
    let curElement = nums[i];
    let residual = target - curElement;
    //找到当前元素的配对
    if (map[residual] !== undefined) {
      res.push(map[residual]);
      res.push(i);
      break;
    }
    //建立元素索引
    map[curElement] = i;
  }
  return res;
};
```
