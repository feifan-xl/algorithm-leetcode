/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = []

    function dfs (nums, path) {
        if (path.length > 4) return
        if (nums.length === 0) {
            if (path.length === 4) {
                res.push([...path].join('.'))
            }
            return
        }

        if (nums[0] === '0') {
            dfs(nums.slice(1), [...path, '0'])
            return
        }
        for (let i = 0; i <= 2 && i < nums.length; i++) {
            const str = nums.slice(0, i + 1)
            if (str <= 255 && str >= 0) {
                dfs(nums.slice(i + 1), [...path, str])
            }
        }
        
    }
    dfs(s, [])
    return res
};