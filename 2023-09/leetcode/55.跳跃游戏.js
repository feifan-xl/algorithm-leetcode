/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    let len = nums.length
    let right = 0
    for (let i = 0; i < len; i++) {
        if (i <= right) {
            right = Math.max(right, nums[i] + i)
            if (right >= (len - 1)) return true
        }
    }
    return false
};