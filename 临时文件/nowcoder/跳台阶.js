
function step (n) {

  let dp = [1, 2]
  for (let i = 2; i < n -1; n++) {
    dp[n] = dp[n + 1] + dp[n + 2]
  }
  return dp[n - 1]
}