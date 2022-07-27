/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    const s = n.toString(2);
    console.log(s);
    return /^10{1,}$/.test(n.toString(2));
};

console.log(isPowerOfTwo(5));
