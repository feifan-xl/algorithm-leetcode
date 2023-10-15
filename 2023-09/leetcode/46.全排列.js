/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    let res = []
    let used = {}
    function dfs (path) {

        if (path.length === nums.length) {
            res.push([...path])
            return
        }
        for (let num of nums) {
            if (used[num]) continue
            path.push(num)
            used[num] = true
            dfs(path)
            used[num] = false
            path.pop()
        }
    }
    dfs([])
    return res
};