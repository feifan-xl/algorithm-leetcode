/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isStraight = function(nums) {
    let set = new Set(), max = 0, min = 14
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            continue
        } else if (set.has(nums[i])) {
            return false
        } else {
            set.add(nums[i])
            max = Math.max(max, nums[i])
            min = Math.min(min, nums[i])
        }
    }
    return max - min - count < 5 

};