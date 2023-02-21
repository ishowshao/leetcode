/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    if (n < 2) {
        return n;
    }
    let ans = 1;
    for (let i = 2; i <= n; i++) {
        const q = Math.sqrt(i);
        ans += (Math.floor(q) === q ? 1 : 0);
    }
    return ans;
};