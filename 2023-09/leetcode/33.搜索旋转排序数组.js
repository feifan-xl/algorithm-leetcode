/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let len = nums.length
    let l = 0, r = len - 1
    if (len === 1) return nums[0] == target ? 0 : -1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[0] <= nums[mid]) {
            if (nums[0] <= target && target < nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else if (nums[0] > nums[mid]) {
            if (target > nums[mid] && target <= nums[l]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }
    return -1
};