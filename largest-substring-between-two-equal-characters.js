/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (map[ch] === undefined) {
            map[ch] = [i];
        } else {
            map[ch].push(i);
        }
    }
    let ans = -1;
    for (let ch in map) {
        if (map[ch].length > 1) {
            ans = Math.max(ans, map[ch][map[ch].length - 1] - map[ch][0] - 1);
        }
    }
    return ans;
};
