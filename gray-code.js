/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    const ret = [];
    for (let i = 0; i < 1 << n; i++) {
        ret.push((i >> 1) ^ i);
    }
    return ret;
};

console.log(grayCode(4));
