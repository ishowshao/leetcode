/**
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
    const n1 = num * 4294967296;
    const n2 = Math.floor(n1);
    if (n1 - n2 > 0.0000001) {
        return 'ERROR';
    } else {
        let ans = '';
        let count = 0;
        while (num !== 0 && count < 32) {
            num *= 2;
            if (num >= 1) {
                ans += '1';
            } else {
                ans += '0';
            }
            num = num % 1;
            count++;
        }
        return '0.' + ans;
    }
};

printBin(0.625);
