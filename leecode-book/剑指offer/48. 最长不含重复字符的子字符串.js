/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map(), r = 0, maxLen = 0
    for ( let i = 0; i < s.length; i++) {
        if (i !== 0) {
            map.delete(s[i])
        }
        while (!map.has(s[i]) && r < s.length) {
            map.set(s[r], r)
            r++
        }
        maxLen = Math.max(maxLen, r - i)
    }
    return maxLen
};