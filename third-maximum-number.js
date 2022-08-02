/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    nums = Array.from(new Set(nums));
    nums = nums.sort((a, b) => b - a);
    return nums[2] === undefined ? nums[0] : nums[2];
};
