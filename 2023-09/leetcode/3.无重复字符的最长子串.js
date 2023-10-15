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

    let l = 0, r = 0, res = 0;
    let obj = {}

    while (r < s.length) {
        var cur = s[r]
        r++
        if (obj[cur] == undefined) {
            obj[cur] = 1
        } else {
            obj[cur]++
        }

        while (obj[cur] > 1) {
            obj[s[l]]--
            l++
        }
        res = Math.max(res, r - l)
    }
    return res
};
// @lc code=end

