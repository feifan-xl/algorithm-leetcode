
// 输入：
// [1,2,3,3,3,3,4,5],3
// 复制
// 返回值：
// 4


function GetNumberOfK(data, k) {
  let ans = 0
  const leftIdx = binarySearch(nums, target)
  const rightIdx = binarySearch(nums, target)
  if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
      ans = rightIdx - leftIdx + 1;
  } 
  return ans;
}

const binarySearch = (nums, target) => {
  let l = 0, r = nums.length, ans
  while (l <= r) { 
    const mid = Math.floor((r + l) / 2) 
    if (nums[mid] > target) {
      r = mid - 1
      ans = mid
    } else {
      l = mid + 1
    }
  }
}