/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let count = 0, m = grid.length, n = grid[0].length
    const setFlag = (i, j) => {

        if (i>= 0 && i < m && j >= 0 && j <n && grid[i][j] === '1') {
            grid[i][j] = '0'
            setFlag(i - 1, j)
            setFlag(i + 1, j)
            setFlag(i, j + 1)
            setFlag(i, j - 1)
        }
    }

    for (let i = 0; i< m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                count++
                setFlag(i, j)
            }
        }
    }
    return count
};