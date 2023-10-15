/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let maxPrice = Array(prices.length).fill(0)
    maxPrice[prices.length - 1] = prices[prices.length - 1]
    for (let i = prices.length - 2; i >= 0; i--) {
        maxPrice[i] = Math.max(maxPrice[i + 1], prices[i])
    }
    let res = 0
    for (let i = 0; i < prices.length; i++) {
        res = Math.max(res, maxPrice[i] - prices[i])
    }
    return res
};