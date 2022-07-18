/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    const helper = (x, n) => {
        if (n === 0) {
            return 1;
        }
        if (n === 1) {
            return x;
        }
        if (n % 2 === 0) {
            const num = helper(x, n / 2);
            return num * num;
        } else {
            const num = helper(x, (n - 1) / 2);
            return num * num * x;
        }
    }
    return helper(x, n);
};

console.log(myPow(2, 11));
