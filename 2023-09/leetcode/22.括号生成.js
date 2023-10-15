/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    if (n === 0) return []
    let res = []
    backtrack(0,0,'')
    function backtrack (left, right, cur) {
        if ((left == n) && (right == n)) {
            res.push(cur)
            return
        }
        if (right > left) return
        if (right > n || left > n) return

        backtrack(left + 1, right, cur + '(')

        backtrack(left, right + 1, cur + ')')
    }
    return res
};
generateParenthesis(3)