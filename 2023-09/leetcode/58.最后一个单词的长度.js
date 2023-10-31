/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let len = s.length
    let l = 0, r = 0, res = 0
    while (l < s.length) {
        while (s[l] == ' ') {
            l++
        }
        r = l
        let tmp = 0
        while (r < len && s[r] != ' ') {
            tmp++;
            r++;
        }
        if (tmp != 0)res = tmp
        l = r
    }
    return res
};