/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const max = Array(prices.length).fill(0);
    let m = 0;
    for (let i = prices.length - 1; i > -1; i--) {
        let price = prices[i];
        m = Math.max(m, price);
        max[i] = m;
    }
    // console.log(max);
    let best = 0;
    for (let i = 0; i < prices.length; i++) {
        best = Math.max(max[i] - prices[i], best);
    }
    return best;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));