/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (map[c] === undefined) {
            map[c] = 1;
        } else {
            map[c]++;
        }
    }
    const count = Object.values(map);
    let odd = 0;
    for (let i = 0; i < count.length; i++) {
        if (count[i] % 2 !== 0) {
            odd++;
        }
    }
    return odd < 2;
};
