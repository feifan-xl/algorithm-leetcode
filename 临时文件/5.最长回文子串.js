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
  // dp[l][r] = dp[l-1][r+1] && s[i] === s[j]
  let len = s.length
  if (len < 2) return s

  let dp = new Array(len), maxLen = 1, begin = 0
  for (let i =0; i < len; i++) {
    dp[i] = new Array(len)
    dp[i][i] = true
  }
  for (let L = 2; L < len; L++) {
    for (let i =0; i< len; i++) {
      let j = L + i -1
      if (j >= len) break
      if (s[i] === s[j]) {
        if (j - i > 3) {
          dp[i][j] = dp[i+1][j-1]
        } else {
          dp[i][j] =true
        }

      } else {
        dp[i][j] =false
      }
      if (dp[i][j] && j - i + 1> maxLen) {
        maxLen = j -i + 1
        begin = i
      }
    }
  }
  return s.substring(begin, begin + maxLen)
};
// @lc code=end




var longestPalindrome = function(s) {
  
  let len = s.length
  function isPalidorme (l, r) {
    while (l >=0 && r<len && s[l] === s[r]) {
      l--
      r++
    }
    return r - l - 1
  }
  let start = 0, end = 0
  for (let i = 0; i < len; i++) {
    let len1 = isPalidorme(i,i)
    let len2 = isPalidorme(i , i+1)
    let max = Math.max(len1, len2)
    if(max > end - start) {
      start = i - (len - 1) / 2
      end = i + len / 2
    }
  }
  return s.substring(begin, end)
}