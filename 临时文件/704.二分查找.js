/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 1) return target === nums[0]
  let l = 0, r = nums.length - 1
  while(l < r) {
    let mid = Math.floor((r + l) / 2)
    if (nums[mid] > target) {
      r = mid - 1
    } else if (nums[mid] < target) {
      l = mid + 1
    } else {
      return mid
    }
  }
  return -1
};
// @lc code=end

