/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const valueSymbols = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
        const roman = [];
        for (let [k, v] of valueSymbols) {
            while (num >= k) {
                roman.push(v)
                num -= k
            }
            if (num == 0) {
                break
            }
        }
        return roman.join('')
    };