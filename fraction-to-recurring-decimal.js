/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    if (numerator === 0) {
        return '0';
    }
    let sign = '';
    if ((numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0)) {
        sign = '-';
    }
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);

    const q = [];
    let i = 0;
    const mod = [];
    let len = -1;
    let count = 0;
    while (i < 1000) {
        if (numerator === 0) {
            break;
        }
        if (numerator < denominator) {
            q.push(0);
        } else {
            q.push(Math.floor(numerator / denominator));
            numerator = numerator % denominator;
        }
        mod.push(numerator);
        if (mod.indexOf(numerator) < mod.length - 1) {
            len = mod.length - 1 - mod.indexOf(numerator);
            count++;
            // console.log('check', numerator, len, count);
            if (count === len) {
                q.push(Math.floor((numerator * 10) / denominator));
                break;
            }
        } else {
            len = -1;
            count = 0;
        }
        numerator *= 10;
        i++;
    }
    // console.log(mod);
    // console.log(q);
    let ans = '';
    if (q.length === 1) {
        ans = String(q[0]);
    } else {
        ans += q.shift() + '.';
        const r = q.splice(q.length - len * 2, len * 2);
        // console.log(q, r);
        ans += q.join('');
        ans += r.length > 0 ? '(' + r.slice(0, len).join('') + ')' : '';
    }
    return sign + ans;
};
