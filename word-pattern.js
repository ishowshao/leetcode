/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const sArr = s.split(' ');
    if (sArr.length !== pattern.length) {
        return false;
    }

    const map1 = {};
    const map2 = {};
    for (let i = 0; i < pattern.length; i++) {
        const c = pattern[i];
        const word = sArr[i];
        if (map1[c] === undefined && map2[word] === undefined) {
            map1[c] = word;
            map2[word] = c;
        } else {
            if (map1[c] === undefined || map2[word] === undefined) {
                return false;
            }
            if (map1[c] !== word) {
                return false;
            }
        }
    }
    return true;
};
