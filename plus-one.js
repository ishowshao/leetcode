/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let carry = 1;
    for (let i = digits.length - 1; i > -1; i--) {
        let d = digits[i];
        let p = d + carry;
        if (p > 9) {
            carry = 1;
            p = p % 10;
        } else {
            carry = 0;
        }
        digits[i] = p;
    }
    if (carry === 1) {
        digits.unshift(1);
    }
    return digits;
};

console.log(plusOne([9,9,9]));
