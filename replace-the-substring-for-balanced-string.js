/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
    const count = { Q: 0, W: 0, E: 0, R: 0 };
    for (let i = 0; i < s.length; i++) {
        count[s[i]]++;
    }
    console.log(count);
    const values = Object.values(count);
    const min = Math.min(...values);
    values.forEach((v, i) => values[i] -= min);
    if (values.every(v => v === 0)) {
        return 0;
    }
    return 1;
};
