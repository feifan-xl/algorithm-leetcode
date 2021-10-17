/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    function quickSelect (l, r, k) {
        let q = randomPar(l, r, k)
        if (q === k) {
            return arr[q]
        } else {
            return q > k ? quickSelect(l, q-1, k) : quickSelect(q + 1, r, k)
        }
    }

    function randomPar (l, r, k) {
        let random = Math.floor((l + r) / 2)
        swap(nums, l, random)
        for (let i = l + 1; i < r; i++) {
            if (nums[i] < nums[random]) {
                swap(nums, i, random) 
                random++
            }
        }
        return random
    }

    return quickSelect(0, nums.length, k)

};
// @lc code=end

