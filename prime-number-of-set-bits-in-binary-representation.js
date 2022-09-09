/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
    let ans = 0;
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    for (let i = left; i <= right; i++) {
        const n = i.toString(2).split('').filter(c => c === '1').length;
        if (primes.includes(n)) {
            ans++;
        }
    }
    return ans;
};
