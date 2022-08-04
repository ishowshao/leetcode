/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    const l = word.toLowerCase();
    let diff = 0;
    for (let i = 0; i < l.length; i++) {
        if (l[i] !== word[i]) {
            diff++;
        }
    }
    if (diff === word.length) {
        return true;
    }
    if (diff === 0) {
        return true;
    }
    if (diff === 1 && l[0] !== word[0]) {
        return true;
    }
    return false;
};
