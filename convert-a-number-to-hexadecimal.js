/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    if (num === 0) {
        return '0';
    }
    const hex = '0123456789abcdef';
    let ans = '';
    let b = 0;
    while (num && ans.length < 8) {
        b = num & 0xf;
        ans = hex[b] + ans;
        num >>= 4;
    }
    return ans;
};

toHex(-1);
