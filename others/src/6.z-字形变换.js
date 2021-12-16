/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let arr = []
    for (let i = 0; i < numRows; i++) {
        arr[i] = []
    }

    let i = 0, flag = -1
    for (let j =0; j <s.length; j++) {
        arr[i].push(s[j])
        if (i === 0 || i == numRows - 1) flag = - flag
        i += flag
    }
    return arr.toString()
};
// @lc code=end

convert('PAYPALISHIRING', 4)