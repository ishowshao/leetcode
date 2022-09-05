/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    let lines = 1;
    let line = 0;
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - 97;
        line += widths[code];
        if (line > 100) {
            line = widths[code];
            lines++;
        }
    }
    return [lines, line];
};

console.log(numberOfLines([4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 'bbbcccdddaaa'));
