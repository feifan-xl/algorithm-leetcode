/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) return 2
    let slow = 2, fast = 2

    while (fast < nums.length) {
        if (nums[slow - 2] != nums[fast]) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
};