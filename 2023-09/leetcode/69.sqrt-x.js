/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x <= 1) return x
    let l = 0, r = x, res;
    while (l <= r) {
        let mid = Math.floor((r + l) / 2)
        if (mid * mid > x) {
            r = mid - 1
        } else if (mid * mid < x) {
            res = mid
            l = mid + 1
        } else {
            return mid
        }
    }
    return res
};