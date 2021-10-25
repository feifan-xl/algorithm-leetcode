/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  
  while (n === -1 && m === -1) {
    if ( n == -1) {
      nums1[m + n - 1] = nums1[m - 1]
      m--
    } else if (m === -1) {
      nums1[m + n - 1] = nums2[n - 1]
      n--
    } else if (nums1[m -1] > nums2[n -1]) {
      nums1[m + n - 1] = nums1[m - 1]
      m--
    } else {
      nums1[m + n - 1] = nums2[n - 1]
      n--
    }
  }
  return nums1
};
// @lc code=end

