/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let root = x;
    while (root * root - x > 1) {
        root = 0.5 * (root + x / root);
    }
    return Math.floor(root);
};

console.log(mySqrt(10));
