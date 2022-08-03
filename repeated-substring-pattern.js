/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    const len = s.length;
    const mid = Math.floor(len / 2);
    for (let i = 1; i <= mid; i++) {
        if (len % i === 0) {
            let sub = s.substring(0, i);
            if (sub.padEnd(len, sub) === s) {
                return true;
            }
        }
    }
    return false;
};

console.log(repeatedSubstringPattern('abab'));
