/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let i = 0;
    let j = 1;
    let max = 0;
    for (j = 1; j < nums.length; j++) {
        if (nums[j - 1] >= nums[j]) {
            max = Math.max(j - i, max);
            i = j;
        }
    }
    max = Math.max(j - i, max);
    return max;
};

console.log(findLengthOfLCIS([1, 3, 5, 7]));
