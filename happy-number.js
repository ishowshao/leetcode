/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let t = 100;
    while (t > 0) {
        n = getSum(n);
        if (n === 1) {
            return true;
        }
        t--;
    }
    return false;
};

const getSum = (n) => {
    let sum = 0;
    while (n > 0) {
        let y = n % 10;
        sum += y * y;
        n = Math.floor(n / 10);
    }
    return sum;
};

console.log(isHappy(19));
