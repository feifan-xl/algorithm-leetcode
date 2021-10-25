/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid == null || grid.length == 0) {
      return 0;
  }
  let n = grid.length, m = grid[0].length, num = 0

  function dfs (grid, r, l) {
    if (r < 0 || l < 0 || r >= m || l >= n || grid[r][l] === '0') return
    grid[r][l] = '0'
    dfs(grid, r - 1, l)
    dfs(grid, r + 1, l)
    dfs(grid, r, l - 1)
    dfs(grid, r, l + 1)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        num++
        dfs(grid, i, j)
      }
    }
  }
  return num
};
// @lc code=end

