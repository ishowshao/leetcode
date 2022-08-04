/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function (nums, target) {
    const half = Math.floor(nums.length / 2);
    for (let i = 0; i <= half; i++) {
        if (nums[i] === nums[i + half]) {
            return true;
        }
    }
    return false;
};
