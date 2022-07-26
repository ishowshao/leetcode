/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    console.log(n.toString(2));
    let count = 0;
    while (n > 0) {
        count += n % 2;
        n = Math.floor(n / 2);
    }
    console.log(count);
};

console.log(hammingWeight(4294967293));
