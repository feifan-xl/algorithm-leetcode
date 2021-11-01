
// 输入: s = "abcdefg", k = 2
// 输出: "cdefgab"
// 输入: s = "lrloseumgh", k = 6
// 输出: "umghlrlose"

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
  n = n % s.length
  let temp = s + s
  return temp.substring(n, s.length + n)
};
