/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * 首尾双指针 取最小值 继续比对
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0, r = height.length - 1,
    max = 0
  while (r < l) {
    let temp = Math.min(height[r], height[l]) * (l - r)
    max = Math.max(temp, max)
    if (height[r] > height[l]) {
      r--
    } else {
      l++
    }
  }
  return max
};
// @lc code=end

