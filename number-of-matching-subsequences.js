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
    let j = 0;
    for (let i = 0; i < a.length; i++) {
        let ch = a[i];
        if (ch === b[j]) {
            j++;
        }
        if (j === b.length) {
            return true;
        }
    }
    return j === b.length;
};
