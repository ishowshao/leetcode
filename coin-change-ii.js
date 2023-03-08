/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    coins.sort((a, b) => a - b);
    let ans = 0;
    let counter = 0;
    const cache = Array(amount + 1).fill(0).map(() => Array(coins.length).fill(null));
    console.log(cache);
    const helper = (target, start) => {
        // console.log(target, start);
        if (cache[target][start] !== null) {
            return cache[target][start];
        }
        counter++;
        if (target === 0) {
            // ans++;
            return 1;
        }
        if (target < 0) {
            return 0;
        }
        let local = 0;
        for (let i = start; i < coins.length; i++) {
            const c = coins[i];
            if (target - c < 0) {
                break;
            }
            local += helper(target - c, i);
        }
        // console.log(local);
        cache[target][start] = local;
        return local;
    };
    ans = helper(amount, 0);
    console.log(ans, counter);
    console.log(cache);
    return ans;
};
// console.log(change(20, [1, 2, 5]));
console.log(change(500, [3, 5, 7, 8, 9, 10, 11]));
