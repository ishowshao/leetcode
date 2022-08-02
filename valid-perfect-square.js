/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    const max = Math.pow(2, 31) - 1;
    const nums = [];
    let n = 1;
    while (true) {
        let sq = n * n;
        if (sq < max) {
            nums.push(sq);
        } else {
            break;
        }
        n++;
    }
    return nums.includes(num);
};
