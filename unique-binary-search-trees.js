// 这题太难了，怎么是中等难度，难度不应该按照最后代码实现的复杂度来算
// 而应该是求方法的建立难度来算吧...
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        let sum = 0;
        for (let j = 1; j <= i; j++) {
            sum += dp[j - 1] * dp[i - (j + 1) + 1];
        }
        dp[i] = sum;
    }
    console.log(dp);
};

console.log(numTrees(19));
