/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

    return words.filter((word) => {
        word = word.toLowerCase();
        let c = word[0];
        let row = rows.findIndex((row) => row.indexOf(c) !== -1);
        for (let i = 1; i < word.length; i++) {
            if (rows[row].indexOf(word[i]) === -1) {
                return false;
            }
        }
        return true;
    });
};

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']));
