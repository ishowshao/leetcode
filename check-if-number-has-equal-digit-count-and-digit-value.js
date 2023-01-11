/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
    const map = {};
    for (let i = 0; i < num.length; i++) {
        if (map[num[i]] === undefined) {
            map[num[i]] = 1;
        } else {
            map[num[i]]++;
        }
    }
    for (let i = 0; i < num.length; i++) {
        const a = map[i] === undefined ? 0 : map[i];
        if (a !== Number(num[i])) {
            return false;
        }
    }
    return true;
};

console.log(digitCount('1210'));
