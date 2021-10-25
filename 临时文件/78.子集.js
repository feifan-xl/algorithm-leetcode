/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let ans = [], temp = []
  const dfs = (cur) => {
    if (cur === nums.length) {
      ans.push(temp.slice())
    }
    temp.push(nums[cur])
    dfs(cur + 1)
    temp.pop()
    dfs(cur + 1 )
  }

  dfs(0)
  return ans
};
// @lc code=end


var subsets = function(nums) {
  let ans = [], temp = []
  const dfs = (cur, nums) => {
    console.log(cur, temp)
    if (cur === nums.length) {
      ans.push(temp.slice())
      return
    }
    temp.push(nums[cur])
    dfs(cur + 1, nums)
    temp.pop(nums.length - 1)
    dfs(cur+1, nums)
  }

  dfs(0, nums)
  return ans
};
subsets([1,2,3])