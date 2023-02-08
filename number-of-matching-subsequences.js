/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
    return words.filter(w => isSubseq(s, w)).length;
};

/**
 * @param {string} a 
 * @param {string} b 
 */
const isSubseq = (a, b) => {
    let position = 0;
    for (let i = 0; i < b.length; i++) {
        let pos = a.indexOf(b[i], position);
        if (pos === -1) {
            return false;
        } else {
            position = pos + 1;
        }
    }
    return true;
};

console.log(isSubseq('abced', 'bb'));
