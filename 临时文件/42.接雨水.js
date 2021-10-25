/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let res = 0, len = height.length
  for (let i = 1; i < len -1;i++) {
    let maxLeft = 0, maxRight = 0
    for (let j = i; j >= 0; j--) {
      maxLeft = Math.max(maxLeft, height[j])
    }
    for (let j = i; j < len; j++) {
      maxRight = Math.max(maxRight, height[j])
    }
    res +=  Math.min(maxLeft, maxRight) - height[i]
  }
  return res
}
// @lc code=end
