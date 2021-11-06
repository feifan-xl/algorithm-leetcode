/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if (matrix.length === 0 ) return false
    let col = 0, row = matrix[0].length - 1
    let temp = matrix[0][row]
    while (col <= matrix.length - 1 && row >= 0) {
        temp = matrix[col][row]
        if (target < temp) {
            row--
        } else if (target > temp) {
            col++
        } else {
            return true
        }
    }
    return false
};