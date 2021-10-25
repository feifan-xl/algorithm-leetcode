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
  const res = [];
  const used = {};
  function dfs (path) {
    if (path.length === nums.length) {
      res.push(path.slice())
      return
    }
    for (const num of nums) {
      if(used[num]) continue
      path.push(num)
      used[num] = true
      dfs(path)
      path.pop()
      used[num] = false
    }
  }
  
  dfs([]); // 递归的入口，空path传进去
  return res;
};
// @lc code=end

permute([1,2,3])