/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    let dp = [0, 1]
    if (n < 3) return dp[n]
    for (let i = 3; i < n; i++) {
        dp[n] = dp[n - 1] + dp[n - 2]
    }
    return dp[n]
}


fib = function (n) {
    let dp1 = 0, dp2 = 1, res
    if (n < 2) {
        return n
    }
    for (let i = 0; i <= n; i++) {
        res = dp1 + dp2
        dp2 = dp1
        dp1 = res
    }
    return res
}