/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0;
    accounts.forEach((array) => {
        let sum = array.reduce((p, c) => p + c, 0);
        max = Math.max(sum, max);
    });
    return max;
};
