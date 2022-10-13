/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let max = 0;
    let length = 1;
    // s += ''.padEnd(k, ' ');
    let kk = k;
    let c = s[0];
    let start = -1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== c) {
            if (start < 0) {
                start = i;
            }
            if (kk > 0) {
                kk--;
                length++;
            } else {
                console.log(c, length, start, i);
                max = Math.max(length, max);
                length = 1;
                c = s[start];
                kk = k;
                i = start;
                start = -1;
            }
        } else {
            length++;
        }
    }
    max = Math.max(length + kk > s.length ? s.length : length + kk, max);
    return max;
};

// console.log(characterReplacement('AABBBAB', 2));
// console.log(characterReplacement('AAAA', 2));
console.log(characterReplacement('ABBB', 2));
