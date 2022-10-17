/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    'bbbab'
    const length = s.length;
    const dp = Array(length).fill(0).map(() => Array(length).fill(0));
    for (let i = 0; i < length; i++) {
        dp[i][i] = 1;
    }
    // console.log(dp);
    for (let i = 1; i < length; i++) {
        for (let j = 0; j < length - i; j++) {
            const m = j;
            const n = i + j;
            // console.log(m, n);
            if (s[m] === s[n]) {
                dp[m][n] = dp[m + 1][n - 1] + 2;
            } else {
                dp[m][n] = Math.max(dp[m][n - 1], dp[m + 1][n]);
            }
        }
    }
    // console.log(dp);
    // return 4;
    return dp[0][length - 1];
};

console.log(longestPalindromeSubseq('aa'));
