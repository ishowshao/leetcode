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
    coins.sort((a, b) => b - a);

    let result = [];

    const target = [];

    const helper = (amount) => {
        if (amount === 0) {
            result.push([...target]);
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

    helper(amount);

    console.log(result);
};

console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([186, 419, 83, 408], 6249));
