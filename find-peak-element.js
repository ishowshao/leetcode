/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let max = Number.NEGATIVE_INFINITY;
    let maxIndex = -1;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num > max) {
            max = num;
            maxIndex = i;
        }
    }
    return maxIndex;
};
