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
    let count = 0, n = grid.length
    if (n === 0) return 0
    let m = grid[0].length
    if (m === 0) return 0
    const dfs = (l, r) => {
        if (l >= m || l >= n || r < 0 || l <0 || grid[r][l] === '0') return false
        grid[r][l] = '0'
        dfs(r + 1, l)
        dfs(r, l + 1)
    }


    for (let i = 0; i < m; i++) {
        for (let j = 0; j< n;j++) {
            if (grid[i][j] === '1') {
                count++
                dfs(i, j)
            }
        }
    }
    return count
};
// @lc code=end

