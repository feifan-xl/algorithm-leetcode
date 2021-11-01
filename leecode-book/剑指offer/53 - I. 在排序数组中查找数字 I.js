

// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2

// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
   let ans = 0
   const leftIdx = binarySearch(nums, target, true)
   const rightIdx = binarySearch(nums, target, false)
   if (leftIdx <= rightIdx ) {
     ans = rightIdx - leftIdx + 1
   }
   return ans
};

function binarySearch (nums , target, lower) {
  let left = 0, right = nums.length - 1, ans
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums){
      left = mid + 1
    }
  }
}