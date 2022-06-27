/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length == 0) {
        return 0;
    }

    const f = Array(prices.length)
        .fill(0)
        .map(() => [0, 0, 0]);
    f[0][0] = -prices[0];
    for (let i = 1; i < prices.length; ++i) {
        f[i][0] = Math.max(f[i - 1][0], f[i - 1][2] - prices[i]);
        f[i][1] = f[i - 1][0] + prices[i];
        f[i][2] = Math.max(f[i - 1][1], f[i - 1][2]);
    }
    return Math.max(f[prices.length - 1][1], f[prices.length - 1][2]);
};

// console.log(maxProfit([1, 2, 4, 0, 2, 1, 3, 7]));
console.log(maxProfit([6, 1, 3, 2, 4, 7]));
