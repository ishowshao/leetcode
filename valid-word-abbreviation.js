/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
    // 48 57
    let n = '';
    let j = 0;
    for (let i = 0; i < abbr.length; i++) {
        if (abbr.charCodeAt(i) >= 48 && abbr.charCodeAt(i) <= 57) {
            n += abbr[i];
            if (n === '0') {
                return false;
            }
        } else {
            if (n.length > 0) {
                j += Number(n);
                n = '';
            }
            if (abbr[i] !== word[j]) {
                return false;
            }
            j++;
        }
    }
    if (n.length > 0) {
        j += Number(n);
    }
    return j === word.length;
};

console.log(validWordAbbreviation('internationalization', 'i12iz4n'));
// console.log('0'.charCodeAt(0), '9'.charCodeAt(0));
