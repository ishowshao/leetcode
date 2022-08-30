/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    let last = null;
    while (n > 0) {
        let bit = n % 2;
        n = n >> 1;
        if (bit !== last) {
            last = bit;
        } else {
            return false;
        }
    }
    return true;
};
