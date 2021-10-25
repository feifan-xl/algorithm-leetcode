/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0)  return 0
  let map = new Map()
  let r = -1, maxLen = 0
  for (let i = 0; i < s.length; i++) {
    if (i != 0) {
      map.delete(s[i -1])
    }
    while (r + 1 < s.length && !map.has(s[r + 1]) ) {
      map.set(s[r + 1], r )
      ++r
    }
    maxLen = Math.max(maxLen, r - i + 1)
  }
  return maxLen
};
// @lc code=end
lengthOfLongestSubstring(" ")

module.exports.lengthOfLongestSubstring = lengthOfLongestSubstring
