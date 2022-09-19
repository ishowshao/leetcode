/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    // 123 * 456 = 123 * (400 + 50 + 6)
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    let cache = '0';
    for (let i = 0; i < num2.length; i++) {
        let n = num2[num2.length - 1 - i];
        let res = multiplyOne(num1, n);
        cache = addStrings(cache, res.padEnd(res.length + i, '0'));
    }
    return cache;
};

const multiplyOne = (num1, num2) => {
    let carry = 0;
    let result = [];
    for (let i = 0; i < num1.length; i++) {
        let a = Number(num1[num1.length - 1 - i]);
        let b = Number(num2);
        let m = a * b + carry;
        result[i] = m % 10;
        carry = Math.floor(m / 10);
    }
    if (carry > 0) {
        result.push(carry);
    }
    return result.reverse().join('');
}

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


console.log(multiply('123', '456'));