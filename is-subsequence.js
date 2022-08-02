/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let p = -1;
    for (let i = 0; i < s.length; i++) {
        p = t.indexOf(s[i], p + 1);
        if (p === -1) {
            return false;
        }
    }
    return true;
};

console.log(isSubsequence('b', 'c'));
console.log(isSubsequence('aaaaaa', 'bbaaaa'));
