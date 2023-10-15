/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp_1 = 1, dp_2 = 1

    for (let i = 2; i <= n; i++) {
        const tmp = dp_1 + dp_2
        dp_1 = dp_2
        dp_2 = tmp
    }
    return dp_2
};