/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0
  let l = 1, r = 1
  while (r < nums.length) {
    if (nums[r] !== nums[r-1]) {
      nums[l] = nums[r]
      l++
    }
    r++
  }
  return l
};
// @lc code=end

