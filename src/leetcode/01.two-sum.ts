
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 export const twoSum = function (nums: number[], target: number) : number[]{
  let obj:any = {}
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] !== undefined) {
      return [nums[obj[nums[i]]], nums[i]]
    }
    obj[target-nums[i]] = i
  }
  return []
};
// @lc code=end
