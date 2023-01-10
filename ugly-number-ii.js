/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    const array = new Set([1, 2, 3, 5]);
    const factor = [2, 3, 5];
    const up = Math.pow(2, 32);
    let max = 32;
    while (max--) {
        const values = array.values();
        values.next();
        for (let i = 1, length = array.size; i < length; i++) {
            let a = values.next();
            for (let j = 0; j < factor.length; j++) {
                let num = a.value * factor[j];
                if (num <= up) {
                    array.add(num);
                }
            }
        }
    }
    const ans = Array.from(array).sort((a, b) => a - b);
    console.log(ans, ans.length);
};
console.log(nthUglyNumber(2));