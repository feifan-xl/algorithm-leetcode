/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  let map = {
    '2': "abc",
    '3': "def",
    '4': "ghi",
    '5': "jkl",
    '6': "mno",
    '7': "pqrs",
    '8': "tuv",
    '9': "wxyz"
  }
  let res = []
  function backtrack(index, arr = []) {
    if (index === digits.length) {
      res.push(arr.join(''))
    } else {
      let letters = map[digits[index]]
      for (let i = 0; i< letters.length; i++) {
        arr.push(letters[i])
        backtrack(index + 1, arr.slice())
        arr.pop()
      }
    }
  }

  backtrack(0)
  return res
};
letterCombinations('23')