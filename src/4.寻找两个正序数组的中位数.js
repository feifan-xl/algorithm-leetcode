/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let l1 = 0, l2 = 0, n = nums1.length, m = nums1.length, pre = -1, cur = -1
    
    for (let i = 0; i <= Math.floor((n + m) / 2); i++) {
        pre = cur
        if (l1 < n && (l2 >= m || nums1[l1] < nums2[l2])) {
            cur = nums1[l1]
            l1++
        } else {
            cur = nums2[l2]
            l2++
        }
    }
    return len  % 2 === 0 ? (pre + cur) / 2 : cur
};
// @lc code=end

