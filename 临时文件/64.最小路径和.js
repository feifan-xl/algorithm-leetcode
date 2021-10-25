/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (grid.length === 0) return 0
  let m = grid.length, n = grid[0].length
  let dp = new Array(m).fill(0).map(i => new Array(n))
  dp[m -1][n -1] = grid[m-1][n-1]
  for (let i = 1; i< m; i++) {
    for (let j = 1; j < n; j++) {
      if (i = m - 1 && j != m - 1) {
      }
      dp[i][j] = Math.min(dp[i -1][j], dp[i][ j -1]) + grid[i,j]
    }
  }

};
// @lc code=end

