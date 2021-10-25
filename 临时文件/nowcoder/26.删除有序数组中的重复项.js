/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// 输入：nums = [1,1,1,2,2,3]
// 输出：5, nums = [1,1,2,2,3]
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 1) return nums
  let i = 1, j = 1;
  while (j < nums.length) {
    if (nums[j] !== nums[j - 1]) {
      nums[l] = nums[r]
      i++
    }
    j++
  }
  return nums.splice(0, i)
};
// @lc code=end

