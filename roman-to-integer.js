/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const c = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const cc = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900,
    };
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        const el = s[i];
        if (s[i + 1] !== undefined) {
            let cckey = el + s[i + 1];
            if (cc[cckey] !== undefined) {
                num += cc[cckey];
                i++;
            } else {
                num += c[el];
            }
        } else {
            num += c[el];
        }
    }
    return num;
};

console.log(romanToInt('III'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
