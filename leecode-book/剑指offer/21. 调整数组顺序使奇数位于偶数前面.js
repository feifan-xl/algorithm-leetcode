/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
    let l = 0, r = nums.length, temp
    while (l < r) {
        while (l < r && nums[r] % 2 === 1) r--
        while (l < r && nums[l] % 2 === 0) l++
        temp = nums[r]
        nums[r] = nums[l]
        nums[l] = temp
    }
    return nums
};