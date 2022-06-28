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

    const cache = Array(amount + 1).fill(null);

    const helper = (amount) => {
        if (amount === 0) {
            return 0;
        }
        if (cache[amount] !== null) {
            return cache[amount];
        }
        let min = Number.POSITIVE_INFINITY;
        for (let i = 0; i < coins.length; i++) {
            let coin = coins[i];
            if (amount >= coin) {
                min = Math.min(min, helper(amount - coin) + 1);
            }
        }
        cache[amount] = min;
        return min;
    };

    let res = helper(amount);

    // console.log(cache);
    return Number.isFinite(res) ? res : -1;
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([186, 419, 83, 408], 6249));
console.log(coinChange([2], 3));
