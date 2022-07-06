/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let num = x ^ y;
    let d = 0;
    while (num > 0) {
        d += num % 2;
        num = num >> 1;
    }
    return d;
};
