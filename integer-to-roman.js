/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const c = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M',
        4: 'IV',
        9: 'IX',
        40: 'XL',
        90: 'XC',
        400: 'CD',
        900: 'CM',
    };
    const d = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let str = '';
    for (let i = 0; i < d.length; i++) {
        let n = d[i];
        if (num >= n) {
            const r = Math.floor(num / n);
            const nc = c[n];
            str += nc.padEnd(nc.length * r, nc);
            num = num % n;
        }
    }
    return str;
};

console.log(intToRoman(1994));
