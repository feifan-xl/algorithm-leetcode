/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var movingCount = function(m, n, k) {
    const arr = new Array(m).fill(0).map(i => new Array(n).fill(false))
    console.log(arr)
    let count = 0
    const sum = (l, r) => {
        l = l === 100 ? 1 : Math.floor(l / 10) + l % 10
        r = r === 100 ? 1 : Math.floor(r / 10) + r % 10
        return l + r
    }
    const dfs = (l, r) => {
        const temp = sum(l, r)
        if (l >= 0 && l < m && r >= 0 && r < n && temp <= k && arr[l][r] !== true) {
            count++
            arr[l][r] = true
            dfs(l + 1, r)
            dfs(l - 1, r)
            dfs(l, r + 1)
            dfs(l, r - 1)
        }
    }
    console.log(arr)

    dfs(0,0)

    return count
};

movingCount(1, 2, 1)