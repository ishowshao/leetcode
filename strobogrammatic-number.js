/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function (num) {
    const map = {
        '6': '9',
        '9': '6',
        '8': '8',
        '1': '1',
        '0': '0'
    };
    num = num.split('');
    const reverse = [...num].reverse();
    for (let i = 0; i < num.length; i++) {
        if (map[num[i]] !== reverse[i]) {
            return false;
        }
    }
    return true;
};
