/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    let map = {
        'I': 1,
        'X': 10,
        'V': 5,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let res = 0, len = s.length
    for (let i = len - 1; i >= 0; i--) {
        if ( map[s[i]] < map[s[i + 1]]) {
            res -= map[s[i]]
        } else {
            res += map[s[i]]
        }
    }
    return res
};