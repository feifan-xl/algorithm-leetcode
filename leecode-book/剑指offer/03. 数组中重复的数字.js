
// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3 
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
   let set = new Set(), res = ''
   for (let i = 0; i <nums.length; i++) {
     if (set.has(nums[i])) {
       return nums[i]
     } else {
       set.add(nums[i])
     }
   }
   return res
};
