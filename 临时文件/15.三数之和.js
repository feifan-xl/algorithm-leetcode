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
  nums = nums.sort((a,b) => a > b)
  let res = [], temp = 0
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[0] > 0)break
    if (i > 0 && nums[i] === nums[i -1])
    temp = 0 - nums[i]
    let l = i + 1, r = nums.length - 1
    while (l < r) {
      if ((nums[l] + nums[r] === temp)) {
        res.push([[nums[i], nums[r], nums[l]]])
        // while (L<R && nums[L] == nums[L+1]) L++; // 去重
        // while (L<R && nums[R] == nums[R-1]) R--; // 去重
        while (nums[l] === nums[l + 1] && l < r ) l++
        while (nums[r] === nums[r -1] && l < r ) r++
        l++
        r--
      } else if ((nums[l] + nums[r]) > temp) {
        l++
      } else if ((nums[l] + nums[r]) > temp) {
        r--
      }
      
    }
  }
  return res
};
// @lc code=end

threeSum([-1,0,1,2,-1,-4])