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
    let map = {
        '(' : ')',
        '{': '}',
        '[': ']'
    }
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            arr.push(map[s[i]])
        } else {
            if(arr.pop() !== s[i])  return false
        }
    }
    return arr.length === 0
};
// @lc code=end

