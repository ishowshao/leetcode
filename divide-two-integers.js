/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    const max = Math.pow(2, 31) - 1;
    const min = -Math.pow(2, 31);
    if (dividend === 0) {
        return 0;
    }
    let sign = false;
    if (dividend >= 0 && divisor >= 0) {
        sign = true;
    }
    if (dividend < 0 && divisor < 0) {
        sign = true;
    }
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    if (dividend < divisor) {
        return 0;
    }
    let res = 0;
    let num = 0;
    let d, dc;
    do {
        d = divisor;
        dc = 1;
        while (true) {
            num += d;
            res += dc;
            if (num > dividend) {
                if (dc > 1) {
                    num -= d;
                    res -= dc;
                    // dc >>= 1;
                }
                break;
            }
            d += d;
            dc += dc;
        }
    } while (dc !== 1);

    const result = sign ? res - 1 : 1 - res;
    if (result > max) {
        return max;
    }
    if (result < min) {
        return max;
    }
    return result;
};

console.log(divide(-2147483648, -1));
console.log(divide(10, 3));
console.log(divide(7, -3));
console.log(divide(1, 1));
console.log(divide(1, 2));
