/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let l = 0, r = x, ans = -1
  while(l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (mid * mid >= x)  {
      l = mid + 1
      ans = mid
    } else {
      r = mid - 1
    }
  }
  return ans
};
// @lc code=end

