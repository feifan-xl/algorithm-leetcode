/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxValue = function(grid) {
    // dp[i][j] = Math.max(dp[i][j - 1],dp[i - 1][j]) + grid[i][j]
    let n = grid.length, m = grid[0].length
    let dp = new Array(n).fill(0).map(i => [])
    dp[0][0] = grid[0][0]
    debugger
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === 0 && j === 0) continue
            if (i === 0) {
                dp[i][j] = dp[i][j - 1] + grid[i][j]
            } else if (j === 0) {
                dp[i][j] = dp[i - 1][j] + grid[i][j]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
            }
        }
    }
    return dp[n - 1][m - 1]
};

maxValue([[1,3,1],[1,5,1],[4,2,1]])