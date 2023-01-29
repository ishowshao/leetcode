/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
    let ans = 0;
    let open = 0;
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (ch === '|') {
            open++;
        }
        if (ch === '*' && open % 2 === 0) {
            ans++;
        }
    }
    return ans;
};
