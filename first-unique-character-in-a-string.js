/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (map[c] === undefined) {
            map[c] = 1;
        } else {
            map[c]++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};
