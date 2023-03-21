/**
 * @param {number} n
 * @return {number}
 */
var numDupDigitsAtMostN = function(n) {
    if (n < 11) {
        return 0;
    }
    let str = String(n - 1);
    let ok = Number(str[0]);
    for (let i = 1; i < str.length; i++) {
        ok *= (10 - i);
    }
    // console.log(ok);
    return n - ok;
};

console.log(numDupDigitsAtMostN(20));
console.log(numDupDigitsAtMostN(100));