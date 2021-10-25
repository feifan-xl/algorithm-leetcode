/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let arr = []

  function generateAll (current, pos, result) {
    if (pos === current.length) {
      if (valid(current)) {
        arr.push(current)
      }
    } else {
      current[pos] = '('
      generateAll(current, pos + 1, result)
      current[pos] = ')'
      generateAll(current, pos + 1, result)
    }
  }

  function valid (current) {
    let balance = 0
    for (let i = 0; i < current.length; i++) {
      if (current[i] === '(') {
        ++balance
      } else {
        --balance
      }
      if (balance < 0) return false
    }
    return balance === 0
  }

  generateAll([], 0, arr)

  return arr
};
// @lc code=end

