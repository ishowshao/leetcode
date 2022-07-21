/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    // console.log('A'.charCodeAt(0));
    // console.log('Z'.charCodeAt(0));
    const max = 2147483647;
    let num = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        const c = columnTitle.charCodeAt(i) - 64;
        num += c * Math.pow(26, columnTitle.length - 1 - i);
    }
    return num > max ? max : num;
};

console.log(titleToNumber('AAA'));
console.log(titleToNumber('AB'));