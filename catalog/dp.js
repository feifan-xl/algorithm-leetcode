// 爬楼梯

function climbStairs(n) {
  if (n === 1) return 1
  if (n === 2) return 2
  let cur = 2,
    pre = 1
  for (let i = 3; i <= n; i++) {
    let temp = cur + pre
    pre = cur
    cur = temp
  }
  return cur
}

// 打家劫舍
function rob(nums) {
  let dp = [nums[0], Math.max(nums[1], nums[0])]

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math(dp[i - 1], dp[i - 2] + nums[i])
  }
  return dp[i - 1]
}

// 最大正方形

function maxSquare(matrix) {
  const rows = matrix.length
  if (!rows) return 0
  const cols = matrix[0].length
  const dp = Array(rows)
    .fill(0)
    .map(() => [...Array(cols).fill(0)])
  let max = 0

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 1) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1
        max = Math.max(max, dp[i][j])
      } else {
        dp[i][j] = 0
      }
    }
  }
  return max ** 2
}

// 零钱兑换

// [1,2,5, 10]
// dp[n] = Math.min(dp[n-1], dp[n-2], ...)
function coinChange(coins, amount) {
  let dp = [0] // Infinity

  for (let i = 1; i <= amount; i++) {
    for (let coin in coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[n - 1] + 1, dp[i])
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}

// 不同路径
function UniquePaths(m, n) {
  let rows = Array(n).fill(1)
  let dp = [[...rows]]
  for (let i = 1; i < m; i++) {
    dp[i] = [1, ...Array(n - 1).fill(0)]
  }
  dp[0][0] = 0
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
}


// 买卖股票的最佳时机
// [7,1,5,3,6,4] 5
maxProfit( [7,1,5,3,6,4])
function maxProfit (prices) {
  let min = prices[0], max = 0
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    max = Math.max(max, prices[i] - min)
  }
  return max
}

// 买卖股票的最佳时机II
function maxProfit (prices) {
  let res = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i -1] > 0) {
      res += prices[i] - prices[i - 1]
    }
  }
  return res
}