/**
 * @param {number} num
 * @return {number}
 */
 var translateNum = function(num) {
    // dp[n] = dp[n - 1] + dp[n - 2]  if (prepre+pre < 26)     
     let q = 1, p = 1
     for (let i = 2; i < num.length; i++) {
        let temp = num.subString(i - 2, i)
        let c = temp >= 10 && temp < 25 ? q + p : q
        p = q
        q = c
     }
     return q
};