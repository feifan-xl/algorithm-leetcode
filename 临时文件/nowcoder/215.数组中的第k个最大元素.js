/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  return quickSelect(nums, 0, nums.length -1, nums.length - k)
};
// @lc code=end

function quickSelect (nums, l, r, k) {
  let q = randomPartition(nums, l, r)
  if (q === k) return nums[q]
  return q < k ? quickSelect(nums, l, q - 1, k) : quickSelect( nums, q + 1, r, k)
}

function randomPartition (nums, r, l) {
  let random = Math.ceil((r + l)  /2)
  swap(nums, random, r)
  let p = l
  for (let i = l; i < r; i++) {
    if (nums[i] <= nums[random]) {
      swap(nums, p, i)
      p++
    }
  }
  return p + 1
}