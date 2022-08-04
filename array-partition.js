/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    return nums.sort((a, b) => a - b).reduce((p, c, i) => i % 2 === 0 ? p + c : p);
};
