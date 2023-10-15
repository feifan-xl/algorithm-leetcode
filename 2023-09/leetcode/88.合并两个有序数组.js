/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let l = m - 1, r = n - 1, cur = m + n - 1
    while (r >= 0 && l >= 0) {
        if (nums1[l] < nums2[r]) {
            nums1[cur] = nums2[r]
            r--
        } else {
            nums1[cur] = nums1[l]
            l--
        }
        cur--
    }
    if (l < 0) {
        while(r >= 0) {
            nums1[cur] = nums2[r]
            r--
            cur--
        }
    }
    return nums1
};