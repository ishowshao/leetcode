/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const a = Array(26).fill(0);
    const b = Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        a[s.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < t.length; i++) {
        b[t.charCodeAt(i) - 97]++;
    }
    return a.join('') === b.join('');
};
