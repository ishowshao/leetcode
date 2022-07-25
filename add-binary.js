/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let len = Math.max(a.length, b.length);
    a = a.padStart(len, '0');
    b = b.padStart(len, '0');

    let carry = 0;
    let result = '';
    for (let i = a.length - 1; i > -1; i--) {
        let n = Number(a[i]) + Number(b[i]) + carry;
        if (n >= 2) {
            carry = 1;
            n = n % 2;
        } else {
            carry = 0;
        }
        result = String(n) + result;
    }
    if (carry === 1) {
        result = '1' + result;
    }
    return result;
};

console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));
