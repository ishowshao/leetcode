/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    const nums = {};
    for (let i = 1; i < 101; i++) {
        const s = i * i;
        nums[s] = s;
    }
    // console.log(nums);
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;
    dp[4] = 1;
    for (let i = 5; i <= n; i++) {
        const s = Math.floor(Math.sqrt(i));
        const h = Math.floor(s / 2);
        const min = [];
        for (let j = 0; j <= h; j++) {
            let sn = (s - j) * (s - j);
            min.push(dp[sn] + dp[i - sn]);
        }

        dp[i] = Math.min(...min);
    }
    console.log(dp);
    console.log(JSON.stringify(dp));
    return dp[n];
};

console.log(numSquares(10000));
