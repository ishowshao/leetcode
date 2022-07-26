/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    // const max = 2147483647;
    // let num = 0;
    // for (let i = 0; i < columnNumber.length; i++) {
    //     const c = columnNumber.charCodeAt(i) - 64;
    //     num += c * Math.pow(26, columnNumber.length - 1 - i);
    // }
    // return num > max ? max : num;
    let title = '';
    while (columnNumber > 0) {
        let n = columnNumber % 26;
        console.log(n);
        if (n === 0) {
            title = 'Z' + title;
            columnNumber = Math.floor((columnNumber - 26) / 26);
        } else {
            columnNumber = Math.floor(columnNumber / 26);
            title = String.fromCharCode(n + 64) + title;
        }
    }
    return title;
};

console.log(convertToTitle(701));
