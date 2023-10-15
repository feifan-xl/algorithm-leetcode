/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    let i = nums.length - 2
    while ( i>= 0 && nums[i] >= nums[i + 1]) {
        i--
    }

    if (i >= 0) {
        let j = nums.length - 1
        while (j >= 0 && nums[i] >= nums[j]) {
            j--
        }
        swap(i, j)
    } 
    reverse(i + 1)

    function swap (i, j) {
        const tmp = nums[i]
        nums[i] = nums[j]
        nums[j] =tmp
    }
    function reverse (start) {
        let l = start, r = nums.length - 1
        while (l < r) {
            swap(l, r)
            l++;
            r--;
        }
    }
};