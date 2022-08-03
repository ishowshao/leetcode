/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    const x = (-1 + Math.sqrt(1 + 8 * n)) / 2;
    console.log(x);
};

console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
console.log(arrangeCoins(6));
