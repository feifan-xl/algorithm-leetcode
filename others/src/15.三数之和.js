/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// 先排序， 然后首部开始取一个， 双指针取后面的
// 边界条件: 

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a,b) => a - b)
  let res = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let temp = 0 - nums[i],
      l = i + 1, r = nums.length - 1
    while (l < r) {
      if (nums[l] + nums[r] === temp) {
        res.push([nums[l], nums[r], nums[i]])
        while(nums[l] === nums[l + 1] && l < r) l++
        while(nums[r] === nums[r - 1] && l < r) r--
        l++
        r--
      } else if (nums[l] + nums[r] > temp) {
        r--
      } else {
        l++
      }
    }

  }
  return res
};
// @lc code=end

threeSum([-1,0,1,2,-1,-4])