/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let ans = 0;
    while (g.length > 0 && s.length > 0) {
        if (s[0] >= g[0]) {
            s.shift();
            g.shift();
            ans++;
        } else {
            s.shift();
        }
    }
    return ans;
};
