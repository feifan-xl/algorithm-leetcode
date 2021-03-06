/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length
    if (s === 1) return s
    if (s === 2) return s[0] === s[1] ? s[0] : s[1]

    // dp[i][j] = dp[i + 1][j - 1] && s[i][j] === true

    let dp = new Array(len).fill([]), maxLen = 0, begin = 0
    for (let i = 0; i < len; i++) {
        dp[i][i] = true
    }

    for (let l = 2; l < len; l++) {
        for (let i = 0; i < len; i++) {
            let j = l + i - 1
            if (j >= len) break
            if (s[i] === s[j]) {
                if (j - i > 3) {
                    dp[i][j] = dp[i + 1][j - 1] && s[i][j]
                } else {
                    dp[i][j] = true
                }
                if (j - i + 1 > maxLen) {
                    maxLen = j - i + 1
                    begin = i
                }
            } else {
                dp[i][j] = false
            }
        }
    }
    return s.substring(begin, begin + maxLen)

};
// @lc code=end

longestPalindrome = function (str) {
    let len = str.length
    if (len === 1) return str
    let start = 0, end = 0, max = 0

    const isPalidrome = (l, r) => {
        while(l>= 0 && r <= len && str[l] === str[i]) {
            l--
            r++
        }
        let temp = r - l + 1
        if (max < temp) {
            start = l
            end = r
        }
    }

    for (let i = 0; i < str.length - 1; i++) {
        let len1 = isPalidrome(i, i)
        let len2 = isPalidrome(i, i + 1)
    }
    return str.substring(r, l + 1)
}

