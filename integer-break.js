/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    let max = 0;
    for (let i = 2; i <= n; i++) {
        let mul = 1;
        let sum = 0;
        for (let j = 0; j < i - 1; j++) {
            let div = Math.floor(n / i);
            mul *= div;
            sum += div;
        }
        mul *= n - sum;
        max = Math.max(max, mul);
        mul = 1;
        sum = 0;
        for (let j = 0; j < i - 1; j++) {
            let div = Math.ceil(n / i);
            mul *= div;
            sum += div;
        }
        mul *= n - sum;
        max = Math.max(max, mul);
    }
    return max;
};

console.log(integerBreak(8));
