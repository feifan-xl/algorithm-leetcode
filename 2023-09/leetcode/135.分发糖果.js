/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let ret = 1, dec = 0, pre = 1, inc = 1

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] >= ratings[i - 1]) {
            dec = 0
            if (ratings[i] == ratings[i -1]) {
                pre = 1
            } else {
                pre++
            }
            ret += pre
            inc = pre
        } else {
            dec++
            console.log(dec)
            if (inc === dec) {
                dec++
            }
            ret += dec
            pre = 1
        }
    }
    return ret
};