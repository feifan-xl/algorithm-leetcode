/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length
    if (n <= 1) return 0
    let rightMax = new Array(n).fill(0)
    rightMax[n - 1] = height[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i])
    }

    let leftMax = new Array(n).fill(0)
    leftMax[0] = height[0]
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i])
    }
    let result = 0
    for (let i = 1; i < n - 1; i++) {
        result += Math.min(rightMax[i], leftMax[i]) - height[i]
    }
    return result
};