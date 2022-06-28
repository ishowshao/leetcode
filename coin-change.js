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

    let result = [];

    const target = [];

    const dp = [];

    const helper = (amount) => {
        if (amount === 0) {
            result.push(target.length);
            return;
        }
        if (dp[amount] !== undefined) {
            result.push(target.length + dp[amount]);
            return;
        }
        for (let i = 0; i < coins.length; i++) {
            let coin = coins[i];
            if (amount >= coin) {
                target.push(coin);
                helper(amount - coin);
                target.pop();
            }
        }
    };

    // helper(amount);

    for (let i = 1; i <= amount; i++) {
        helper(i);
        // console.log(result);
        dp[i] = Math.min(...result);
        result = [];
        // break;
    }

    // console.log(dp);
    return Number.isFinite(dp[amount]) ? dp[amount] : -1;

    // console.log(result);
};

// console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([186, 419, 83, 408], 6249));
console.log(coinChange([2], 3));
