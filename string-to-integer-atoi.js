/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const max = Math.pow(2, 31) - 1;
    const min = -Math.pow(2, 31);
    s = s.trim();
    const sign = s[0] !== '-';
    let i = (s[0] === '-' || s[0] === '+') ? 1 : 0;
    let num = 0;
    for (; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (code > 47 && code < 58) {
            num = num * 10 + (code - 48);
        } else {
            break;
        }
    }
    num = sign ? num : -num;
    if (num > max) {
        return max;
    }
    if (num < min) {
        return min;
    }
    return num;
};

console.log(myAtoi('   -42'));
console.log(myAtoi('4193 with words'));
