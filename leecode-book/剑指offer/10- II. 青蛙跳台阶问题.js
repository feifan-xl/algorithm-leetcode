/**
 * @param {number} n
 * @return {number}
 */
 var numWays = function(n) {
    // f(n) = f(n - 1) + fn(n - 2)
    if (n <= 1) return 1
    let res = 0, pre = 1, prere = 1
    for (let i = 2; i <= n; i++) {
        res = pre + prere
        prere = pre
        pre = res
    }
    return res
};