/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let len = 0;
    for (let i = s.length - 1; i > -1; i--) {
        if (len > 0 && s[i] === ' ') {
            break;
        } else if (s[i] === ' ') {
            continue;
        } else {
            len++;
        }
    }
    return len;
};

console.log(lengthOfLastWord('   fly me   to   the moon  '));
