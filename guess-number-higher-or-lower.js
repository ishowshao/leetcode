/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let left = 1;
    while (true) {
        let num = Math.floor((left + n) / 2);
        let res = guess(num);
        if (res === 0) {
            return num;
        } else if (res > 0) {
            left = num + 1;
        } else {
            n = num - 1;
        }
    }
};
