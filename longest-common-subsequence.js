/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const dp = Array(text1.length)
        .fill(0)
        .map(() => Array(text2.length).fill(0));
    dp[0][0] = text1[0] === text2[0] ? 1 : 0;
    for (let i = 1; i < dp.length; i++) {
        dp[i][0] = dp[i - 1][0] ? 1 : text1[i] === text2[0] ? 1 : 0;
    }
    for (let i = 1; i < dp[0].length; i++) {
        dp[0][i] = dp[0][i - 1] ? 1 : text2[i] === text1[0] ? 1 : 0;
    }
    // console.log(dp);
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1] + (text1[i] === text2[j] ? 1 : 0));
        }
    }
    console.log(dp);
    return dp[text1.length - 1][text2.length - 1];
};

// console.log(longestCommonSubsequence('abcde', 'ace'));
console.log(longestCommonSubsequence('bsbininm', 'jmjkbkjkv'));
