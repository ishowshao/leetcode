/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const max = Math.pow(2, 31) - 1;
    const min = -Math.pow(2, 31);
    console.log(max, min);
    const sign = x > 0;
    x = Math.abs(x);

    let arr = [];
    while (x > 0) {
        arr.push(x % 10);
        x = Math.floor(x / 10);
    }
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num += arr[i] * Math.pow(10, arr.length - i - 1);
    }
    x = sign ? num : -num;
    // console.log(x);
    if (x > max || x < min) {
        return 0;
    }
    return x;
};

console.log(reverse(-123));
console.log(reverse(1563847412));
