/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    return n > 0 && Math.pow(2, 30) % n === 0 && Math.sqrt(n) % 1 === 0;
};
