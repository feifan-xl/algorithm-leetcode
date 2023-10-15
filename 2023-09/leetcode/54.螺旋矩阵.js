/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }

    let res = [], i = 0, j = 0;
    let l = 0, r = matrix[0].length - 1, t = 0, b = matrix.length - 1;

    while (l <= r && t <= b) {
        for (let k = l; k <= r; k++) {
            res.push(matrix[t][k])
        }
        for (let k = t + 1; k <= b; k++) {
            res.push(matrix[k][r])
        }
        if (l < r && t < b) {
            for (let column = r - 1; column > l; column--) {
                res.push(matrix[b][column]);
            }
            for (let row = b; row > t; row--) {
                res.push(matrix[row][l]);
            }
        }
        l++;
        r--;
        t++;
        b--;
    }
    return res
};