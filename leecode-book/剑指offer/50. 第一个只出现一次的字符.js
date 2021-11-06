/**
 * @param {string} s
 * @return {character}
 */
 var firstUniqChar = function(s) {
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }
    let temp = ' '
    Array.from(map.keys()).some(key => {
        if (map.get(key) === 1) {
            temp = key
        }
        return map.get(key) === 1
    })
    return temp
};
