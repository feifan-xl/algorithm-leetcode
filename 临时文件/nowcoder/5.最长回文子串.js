/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  
  let start = 0, end = 0
  function isPali (l, r) {
    while (l >= 0 && r <s.length && s[r] === s[l]) {
      l--
      r++
    }
    return r - l - 1
  }
  let max = 0
  for (let i = 0; i <s.length; i++) {
    let len1 = isPali(i, i)
    let len2 = isPali(i, i + 1)
    let temp = Math.max(len1, len2)
    if (max > temp) {
      max = temp
      start =  i - len / 2
      end = i + len / 2
    }
  }
  return s.substring(start, end)
};
// @lc code=end