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

  
  function getKthElement (nums1, nums2, k) {
    let m = nums1.length, n = nums2.length
    let index1 = 0, index2 = 0
    while (true){
      if (index1 === m) return nums2[index2 + k - 1]
      if (index2 === n) return nums1[index1 + k - 1]
      if ( k === 1) return Math.min(nums1[index1], nums2[index2])

      let newIndex1 = Math.min(index1 + k / 2 - 1, m - 1)
      let newIndex2 = Math.min(index2 + k / 2 - 1, m - 1)
      let p1 = nums1[newIndex1]
      let p2 = nums2[newIndex2]
      if (p1 <= p2) {
        k -= newIndex1 - index1 + 1
        index1 = newIndex1 + 1
      } else {
        k -= newIndex2 - index2 + 1
        index2 = newIndex2 + 1
      }
    }
  }
  let len = nums1.length + nums2.length
  if (len % 2 === 1) {
    return getKthElement(nums1, nums2, (len + 1) / 2);
  } else {
    return (getKthElement(nums1, nums2, len / 2) + getKthElement(nums1, nums2, len / 2 + 1)) / 2.0
  }
};
// @lc code=end



// 双指针 首部遍历查找
// 边界 一个数组遍历完 
var findMedianSortedArrays2 = function(nums1, nums2) {
  let n1 = nums1.length, n2 = nums2.length, len = n1 + n2
  let pre = -1, cur = -1
  let p1 = 0, p2 = 0
  for (let i = 0; i <= Math.floor(len / 2); i++) {
    pre = cur
    if (p1 < n1 && (p2 >= n2 || nums1[p1] < nums2[p2])) {
      cur = nums1[p1]
      p1++
    } else {
      cur = nums2[p2]
      p2++
    }
  }
  return len % 2 === 0 ? (pre + cur) / 2 : cur
};
findMedianSortedArrays([1,3], [2])
