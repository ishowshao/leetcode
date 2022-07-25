/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n < 3) {
        return 0;
    }
    let count = 1;
    let mem = [2];
    for (let i = 3; i < n; i++) {
        let len = Math.ceil(Math.pow(i, 0.5));
        let is = false;
        for (let j = 0; j < mem.length && mem[j] <= len; j++) {
            if (i % mem[j] === 0) {
                is = true;
                break;
            }
        }
        if (!is) {
            count++;
            mem.push(i);
        }
    }
    console.log(mem);
    return count;
};

console.log(countPrimes(100));
