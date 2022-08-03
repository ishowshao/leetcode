/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    const length = Math.max(num1.length, num2.length);
    num1 = num1.padStart(length, '0');
    num2 = num2.padStart(length, '0');

    let carry = 0;
    let res = '';
    for (let i = 0; i < length; i++) {
        let n = Number(num1[length - i - 1]) + Number(num2[length - i - 1]) + carry;
        if (n > 9) {
            carry = 1;
            n = n % 10;
        } else {
            carry = 0;
        }
        res = String(n) + res;
    }
    if (carry === 1) {
        res = '1' + res;
    }
    return res;
};
