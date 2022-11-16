/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
    let sum = stones.reduce((prev, current) => prev + current, 0);
    let target = sum >> 1;
    console.log(sum, target);
    const dp = Array(stones.length + 1)
        .fill(false)
        .map(() => Array(target + 1).fill(false));
    dp[0][0] = true;
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j <= target; j++) {
            if (j < stones[i]) {
                dp[i + 1][j] = dp[i][j];
            } else {
                dp[i + 1][j] = dp[i][j] || dp[i][j - stones[i]];
            }
        }
    }
    console.log(dp);
    for (let i = target + 1; i >= 0; i--) {
        if (dp[dp.length - 1][i]) {
            return sum - i * 2;
        }
    }
};

console.log(lastStoneWeightII([91]));
// console.log(lastStoneWeightII([31, 26, 33, 21, 40]));
// console.log(lastStoneWeightII([2, 1, 6, 4, 5]));
// console.log(lastStoneWeightII([2, 1, 2, 2, 2]));
// console.log(lastStoneWeightII([1, 3, 4, 3, 5, 4]));
// console.log(lastStoneWeightII([3, 4, 3, 5, 4]));
// console.log(lastStoneWeightII([1, 5, 4]));
