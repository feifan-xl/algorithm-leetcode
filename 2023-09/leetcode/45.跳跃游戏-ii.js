/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let len = nums.length
    let max = 0, end = 0, step = 0
    for (let i = 0; i < len - 1; i++) {
        max = Math.max(max, nums[i] + i)
        if(i == end) {
            step++
            end = max
        }
    }
    return step
};