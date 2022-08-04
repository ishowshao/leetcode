/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    const sArr = [];
    const tArr = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c !== '#') {
            sArr.push(c);
        } else {
            sArr.pop();
        }
    }
    for (let i = 0; i < t.length; i++) {
        const c = t[i];
        if (c !== '#') {
            tArr.push(c);
        } else {
            tArr.pop();
        }
    }
    return sArr.join() === tArr.join();
};
