/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // 递归回溯爆内存...
    if (amount === 0) {
        return amount;
    }

    coins.sort((a, b) => a - b);

    let result = Number.POSITIVE_INFINITY;

    let count = 0;

    const dp = Array(amount + 1).fill(null);

    const helper = (amount) => {
        if (amount === 0) {
            result = Math.min(result, count);
            return;
        }
        if (dp[amount] !== null) {
            result = Math.min(result, count + dp[amount]);
            return;
        }
        for (let i = 0; i < coins.length; i++) {
            let coin = coins[i];
            if (amount >= coin) {
                count++;
                helper(amount - coin);
                count--;
            }
        }
    };

    for (let i = 1; i <= amount; i++) {
        helper(i);
        dp[i] = result;
        result = Number.POSITIVE_INFINITY;
    }

    // console.log(dp);
    return Number.isFinite(dp[amount]) ? dp[amount] : -1;
};

console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([186, 419, 83, 408], 6249));
console.log(coinChange([2], 3));
