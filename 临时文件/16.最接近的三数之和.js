/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort( (a, b) => a > b)
  let best = nums[nums.length - 1]
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i -1]) continue
    let l = i + 1, r = nums.length - 1
    while (l < r) {
      let sum = nums[i] + nums[r] + nums[l]
      if (Math.abs(sum - target) < Math.abs(best - target)) {
        Best = sum
      }
      if (sum > target) {
        while (l < r && nums[r] == nums[r - 1]) { r--}
        --r
      } else {
        while (l < r && nums[l] === nums[l + 1]) {l++}
        ++l
      }
    }
  }
  return best
};
// @lc code=end

