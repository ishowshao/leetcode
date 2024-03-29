/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (num > 9) {
        let temp = 0;
        while (num > 0) {
            temp += num % 10;
            num = Math.floor(num / 10);
        }
        num = temp;
    }
    return num;
};

console.log(addDigits(38));
