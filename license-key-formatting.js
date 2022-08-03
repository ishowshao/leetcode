/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    s = s.replace(/-/g, '');
    // console.log(s);
    let sub = '';
    let ans = [];
    for (let i = s.length - 1; i > -1; i--) {
        sub = s[i] + sub;
        if (sub.length === k) {
            ans.unshift(sub);
            sub = '';
        }
    }
    sub && ans.unshift(sub);
    // console.log(ans);
    return ans.join('-').toUpperCase();
};

console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4));
