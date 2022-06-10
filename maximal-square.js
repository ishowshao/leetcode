// 这个题比较有意思，我尝试一下自己想的一个方法
// 自己的方法失败了
// 看了一眼评论，这题竟然可以动态规划，我没看细节，自己试试
// 野路子不行啊
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let max = 0;
    const dp = Array(matrix.length)
        .fill(0)
        .map(() => Array(matrix[0].length).fill(0));
    for (let i = 0; i < matrix.length; i++) {
        dp[i][0] = Number(matrix[i][0]);
        max = Math.max(max, dp[i][0]);
    }
    for (let i = 0; i < matrix[0].length; i++) {
        dp[0][i] = Number(matrix[0][i]);
        max = Math.max(max, dp[0][i]);
    }
    console.log(dp);
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            const m = Number(matrix[i][j]);
            if (m === 0) {
                dp[i][j] = m;
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
                max = Math.max(max, dp[i][j]);
            }
        }
    }
    console.log(dp);
    return max * max;
};

console.log(
    maximalSquare([
        ['1', '1', '1', '0', '0'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '1', '1', '1'],
        ['1', '0', '1', '1', '1'],
    ])
);
