/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const a = Array(26).fill(0);
    for (let i = 0; i < t.length; i++) {
        const code = t.charCodeAt(i);
        a[code - 97]++;
    }
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        a[code - 97]--;
    }
    return String.fromCharCode(a.findIndex(el => el === 1) + 97);
};
