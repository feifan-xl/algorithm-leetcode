/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    let res = 0
    let m = grid.length, n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                res++
                dfs(i, j)
            }
        }
    }
    function dfs(i, j) {
        if (i >= m || j >= n || i <0 || j < 0) return
        if (grid[i][j] === '0') return
        
        grid[i][j] = '0'
        dfs(i -1, j)
        dfs(i +1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
    }
    return res
};