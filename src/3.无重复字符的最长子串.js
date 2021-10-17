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
    let len = s.length
    if (len <=1) return len
    let map = new Map(), maxLen = 0, r = 0
    for (let i = 0; i< len; i++) {
        if (i !== 0) {
            map.delete(s[i-1])
        }
        while (!map.has(s[r]) &&  r < len) {
            map.set(s[r], r)
            r++
        }
        maxLen = Math.max(maxLen, r- i)
    }
    return maxLen
};
// @lc code=end

