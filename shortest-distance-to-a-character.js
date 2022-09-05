/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    const pos = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            pos.push(i);
        }
    }
    return Array(s.length)
        .fill(0)
        .map((value, i) => {
            return Math.min(...pos.map((p) => Math.abs(p - i)));
        });
};
