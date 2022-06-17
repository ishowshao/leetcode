/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let position = 0;
    for (let i = 0; i < s.length; i++) {
        let pos = s.indexOf(s[i], position);
        if (pos === i) {
            max = Math.max(max, i - position + 1);
        } else {
            position = pos + 1;
        }
    }
    return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('a'));
