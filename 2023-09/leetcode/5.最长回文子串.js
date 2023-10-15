/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let start = 0, end = 0, res = 0;
    function isPalindrome (l, r) {
        if (s[l] !== s[r]) return 0
        while (s[l - 1] === s[r + 1] && (l - 1) >=0 && (r + 1) < s.length){
            l--
            r++
        }
        if (res < (r - l +1)) {
            start = l
            end = r
            res = r - l + 1
        }
    }

    for (let i = 0; i<s.length - 1; i++) {
        const len1 = isPalindrome(i, i)
        const len2 = isPalindrome(i, i +1)
    }
    return s.substring(start, end + 1)
};