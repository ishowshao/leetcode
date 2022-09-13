/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    const numArr = String(num).split('');
    const arr = String(num).split('').sort((a, b) => Number(b) - Number(a));
    for (let i = 0; i < arr.length; i++) {
        const n = arr[i];
        if (n !== numArr[i]) {
            const index = numArr.lastIndexOf(n);
            const tmp = numArr[i];
            numArr[i] = n;
            numArr[index] = tmp;
            break;
        }
    }
    return Number(numArr.join(''));
};

console.log(maximumSwap(2736));
