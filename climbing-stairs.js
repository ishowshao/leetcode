/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let f = Array(n + 1).fill(0);
    f[1] = 1;
    f[2] = 2;
    for (let i = 3; i < n + 1; i++) {
        f[i] = f[i - 2] + f[i - 1];
    }
    // console.log(f);
    return f[n];
};
console.log(climbStairs(5));