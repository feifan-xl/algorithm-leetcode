/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    // dp[n] = Math.max( nums[n], dp[n - 1] + nums[n])
    let max = nums[0], dp = [nums[0]]
    for (let n = 1; n < nums.length; n++) {
        dp[n] = Math.max( nums[n], dp[n - 1] + nums[n])
        max = Math.max(max, dp[n])
    }
    return max
};