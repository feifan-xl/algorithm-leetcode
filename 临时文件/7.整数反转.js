/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let temp = Math.abs(x)
  let result = 0

  while (temp > 0) {
    result = temp % 10 + result * 10
    temp = Math.floor(temp / 10)
  }


  while( temp > 0) {
    result = (temp % 10)  + result* 10
    temp = Math.floor(temp / 10)
  }
  if (x >= 0) {
    return result > (2**31 - 1) ? 0 : result
  } else {
    return -result < -(2**31) ? 0 : -result
  }
};
// @lc code=end

