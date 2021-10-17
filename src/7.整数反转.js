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
    if(x ===0) return 0
    let flag = x > 0 
    let res = 0, unit = 10
    debugger
    while (x !== 0) {
        res = res* unit+ x % 10 
        x = Math.floor(x / 10)
    }
    return flag ? res : -res
};
// @lc code=end

reverse(1234)