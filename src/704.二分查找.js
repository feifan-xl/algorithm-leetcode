/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let len = nums.length, l = 0, r = len - 1
    debugger
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (nums[mid] > target) {
            r = mid - 1
        } else if (nums[mid] < target) {
            l = mid + 1
        } else {
            return mid
        }
    }
    return -1
};
// @lc code=end

search([-1,0,3,5,9,12], 9)