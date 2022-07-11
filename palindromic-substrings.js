/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let s0 = '';
    for (let i = 0; i < s.length; i++) {
        s0 += s[i];
        s0 += '_';
    }
    s = s0.substring(0, s0.length - 1);
    let count = 0;
    const dp = Array(s.length).fill(0).map(() => Array(s.length).fill(0));
    for (let i = 0; i < s.length; i++) {
        dp[i][0] = true;
        if (i % 2 === 0) {
            count++;
        }
    }
    for (let j = 0; j < s.length; j++) {
        for (let i = 1; i < s.length; i++) {
            dp[j][i] = dp[j][i - 1] && (s[j + i] !== undefined && s[j - i] !== undefined && s[j + i] === s[j - i]);
            if ((j + i) % 2 === 0 && dp[j][i]) {
                count++;
            }
        }
    }
    console.log(dp, count);
};

console.log(countSubstrings('abc'));
