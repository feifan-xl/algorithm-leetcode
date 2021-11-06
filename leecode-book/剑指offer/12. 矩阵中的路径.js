/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
//  dfs 主要对原有数据的还原
var exist = function(board, word) {
    let col = board.length, row = board[0].length

    function dfs (i, j, k) {
        if (i >= col || i < 0 || j >= row || j < 0 || board[i][j] !== word[k]) return false
        if ( k === word.length - 1) return true
        board[i][j] = 0
        let res = dfs(i - 1, j, k + 1) || dfs(i + 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1)
        board[i][j] = word[k]
        return res
    }

    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            if (dfs(i, j, 0)) return true
        }
    }
    return false
};
