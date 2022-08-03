/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function (words) {
    const len = words.length;
    const max = Math.max(...words.map(w => w.length));
    if (len !== max) {
        return false;
    }
    words = words.map(w => w.padEnd(len, ' '));
    for (let k = 0; k < len; k++) {
        for (let i = k; i < max; i++) {
            if (words[k][i] !== words[i][k]) {
                return false;
            }
        }
    }
    return true;
};
