/**
 * @param {string} s
 * @return {string}
 */
  //  输入：s = "We are happy."
  //  输出："We%20are%20happy."
 
 var replaceSpace = function(s) {
  let arr = [], p1 = 0, p2 = 0
  while (p1 < s.length) {
    if (s[p1] === ' ') {
      arr[p2] = '%'
      arr[p2 + 1] = '2'
      arr[p2 + 2] = '0'
      p1++
      p2 += 3
    } else {
      arr[p2] = s[p1]
      p1++
      p2++
    }
  }
  return arr.join('')
};

 var replaceSpace2 = function(s) {
  return s.replaceAll(' ', '%20')
};