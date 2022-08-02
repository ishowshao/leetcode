/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    const a = [];
    for (let i = 0; i < s.length; i++) {
        a.push(t.indexOf(s[i], a[a.length - 1] + 1 || 0));
    }
    console.log(a);
    // a.push(Number.POSITIVE_INFINITY);
    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1) {
            return false;
        }
        // if (a[i] >= a[i + 1])
    }
    return true;
};

console.log(isSubsequence('b', 'c'));
console.log(isSubsequence('aaaaaa', 'bbaaaa'));
