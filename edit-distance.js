/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    // 不看答案能猜出来是动态规划，但是没想明白怎么规划
    // 看了答案，感觉最重要的是理解从空字符串到n长度字符怎么规划
    // 然后从1长度字符到n怎么规划
    // 最后从m到n怎么规划
    // 先在纸上手动解一个例子再写代码会清晰很多
    const dp = Array(word1.length + 1).fill(0).map(() => Array(word2.length + 1).fill(0));

    let m = dp.length;
    let n = dp[0].length;
    for (let i = 0; i < m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = j;
    }

    // console.log(dp);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (word1[i - 1] !== word2[j - 1]) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1] - 1) + 1;
            }
        }
    }

    // console.log(dp);
    return dp[m - 1][n - 1];
};


console.log(minDistance('abcde', 'bcdea'));