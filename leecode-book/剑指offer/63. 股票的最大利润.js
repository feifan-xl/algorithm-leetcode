/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let min = Infinity, max = 0
    for (let i = 0; i < prices.length; i++) {
        max = Math.max(prices[i] - min, max)
        min = Math.min(min, prices[i])
    }
    return max
};