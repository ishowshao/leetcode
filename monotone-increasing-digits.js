/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
    const digits = [];
    while (n > 0) {
        const d = n % 10;
        digits.unshift(d);
        n = Math.floor(n / 10);
    }

    const ans = Array(digits.length).fill(9);
    let i = 0;
    for (i = 0; i < digits.length - 1; i++) {
        if (digits[i] > digits[i + 1]) {
            ans[i] = digits[i] - 1;
            break;
        } else {
            ans[i] = digits[i];
        }
    }
    if (i === digits.length - 1) {
        ans[i] = digits[i];
    }

    if (is(ans)) {
        return Number(ans.join(''));
    }
    return monotoneIncreasingDigits(Number(ans.join('')));
};

const is = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
};

console.log(monotoneIncreasingDigits(33332));
