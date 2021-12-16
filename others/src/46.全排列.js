/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let len = nums.length
    if (len === 1) return [nums]
    let res = [], used = {}
    const dfs = path => {
        if (path.length === nums.length) {
            res.push(path.slice())
            return
        }
        for (let num of nums) {
            if (used[num]) continue
            path.push(num)
            used[num] = true
            dfs(path)
            path.pop()
            used[num] = false
        }
    }
    dfs([])
    return res

};
// @lc code=end






// let len = nums.length
// if (len === 1) return [nums]
// let res = [], used ={}
// const dfs = (path) => {
//     if (path.length === nums.length) {
//         res.push(path.slice())
//         return
//     }
//     for (let num of nums) {
//         if (used[num]) continue
//         path.push(num)
//         used[num] = true
//         dfs(path)
//         path.pop()
//         used[num] = false
//     }
// }
// dfs([])
// return res