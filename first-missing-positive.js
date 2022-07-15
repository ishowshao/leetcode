/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element <= 0) {
            nums[i] = nums.length + 1;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        if (num <= nums.length) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num > 0) {
            return i + 1;
        }
    }
    return nums.length + 1;
};
