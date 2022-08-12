/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    // 1 2 3 4 5 6 7 8 9
    let ans = 0;
    while (n > 0) {
        ans += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }
    return ans;
};

console.log(trailingZeroes(50));
