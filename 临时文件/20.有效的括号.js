/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const obj = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  let arr = []
  for (let i = 0; i < s.length; i++) {

    if (obj[s[i]]) {
      arr.push(s[i])
    } else {
      if (obj[arr[arr.length - 1]] === s[i]) {
        arr.pop()
      } else {
        return false
      }
    }
  }
  return arr.length === 0
};
// @lc code=end

