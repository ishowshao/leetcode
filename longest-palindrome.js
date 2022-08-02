/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (map[c] === undefined) {
            map[c] = 1;
        } else {
            map[c]++;
        }
    }
    const a = Object.values(map);
    let sum = 0;
    let flag = 0;
    for (let i = 0; i < a.length; i++) {
        const n = a[i];
        if (n % 2 === 0) {
            sum += n;
        } else {
            sum += n - 1;
            flag = 1;
        }
    }
    return sum + flag;
};
