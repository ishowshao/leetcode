/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    x = String(x);

    for (let i = 0, j = x.length - 1; i < j; i++, j--) {
        if (x[i] !== x[j]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(1))
