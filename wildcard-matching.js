/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const m = s.length;
    const n = p.length;
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(false));

    dp[0][0] = true; // 空字符串和空字符串匹配
    for (let i = 1; i < m + 1; i++) {
        dp[i][0] = false; // 非空字符串都不和空模式匹配
    }
    // 空字符串和任意长度的模式匹配，只能是*模式
    for (let i = 1; i <= n; i++) {
        if (p[i - 1] === '*') {
            dp[0][i] = true;
        } else {
            break;
        }
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '?') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
            } else {
                dp[i][j] = (s[i - 1] === p[j - 1] && dp[i - 1][j - 1]);
            }
        }
    }
    return dp[m][n];
};

console.log(isMatch('abc', '*a*'));
// console.log(isMatch('mississippi', 'm??*ss*?i*pi'));
// console.log(isMatch('mississ', 'm??*ss*'));
