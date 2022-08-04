/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let buffer = '';
    let res = '';
    const k2 = k * 2;
    for (let i = 0; i < s.length; i++) {
        const m = i % k2;
        if (m < k) {
            buffer = s[i] + buffer;
        } else {
            buffer = buffer + s[i];
        }
        if (buffer.length === k) {
            res += buffer;
            buffer = '';
        }
    }
    res += buffer;
    return res;
};
