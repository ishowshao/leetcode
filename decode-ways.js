/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    const dp = Array(s.length + 1).fill(0);
    dp[0] = 0;
    dp[1] = s[0] === '0' ? 0 : 1;
    dp[2] = count2(s[0], s[1]);
    for (let i = 3; i < dp.length; i++) {
        const n2 = Number(s[i - 2] + s[i - 1]);

        const a = s[i - 1] !== '0' ? dp[i - 1] : 0;
        const b = n2 >= 10 && n2 <= 26 ? dp[i - 2] : 0;
        dp[i] = a + b;
    }
    console.log(dp);
};

const count2 = (s1, s2) => {
    if (s1 === '0') {
        return 0;
    }
    if (s2 === '0') {
        if (s1 === '1' || s1 === '2') {
            return 1;
        }
        return 0;
    }
    const n = Number(s1 + s2);
    if (n < 27) {
        return 2;
    }
    return 1;
};

console.log(numDecodings('1123'));
console.log(numDecodings('226'));
console.log(numDecodings('11106'));
console.log(numDecodings('06'));
console.log(numDecodings('27'));
console.log(numDecodings('12'));
console.log(numDecodings('10'));

1;

1, 1; 11;

1, 1, 2; 11, 2; 1, 12;

1, 1, 2, 3; 11, 2, 3; 1, 12, 3; 1, 1, 23; 11, 23;
