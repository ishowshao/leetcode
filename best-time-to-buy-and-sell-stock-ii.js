/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let stack = [];
    for (let i = 0; i < prices.length; i++) {
        const p = prices[i];
        if (p < stack[stack.length - 1]) {
            profit += stack[stack.length - 1] - stack[0];
            stack = [];
        }
        stack.push(p);
    }
    profit += stack[stack.length - 1] - stack[0];
    // console.log(stack, profit);
    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
