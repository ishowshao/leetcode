/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const map = {};
    const used = {};
    let newS = '';
    for (let i = 0; i < t.length; i++) {
        if (map[s[i]] === undefined && used[t[i]] === undefined) {
            map[s[i]] = t[i];
            used[t[i]] = s[i];
            newS += t[i];
        } else {
            if (map[s[i]] === undefined || used[t[i]] === undefined) {
                return false;
            }
            newS += map[s[i]];
        }
    }

    console.log(newS);
    return newS === t;
};

console.log(isIsomorphic('badc', 'baba'));
