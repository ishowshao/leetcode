/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    let t = 2;
    let sum = 0;
    while (t <= num) {
        if (num % t === 0) {
            sum += num / t;
        }
        if (sum >= num && t < num) {
            return false;
        }
        t++;
    }
    return sum === num;
};

console.log(checkPerfectNumber(56))
