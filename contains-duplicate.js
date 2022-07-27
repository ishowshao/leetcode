/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (map[num] === undefined) {
            map[num] = num;
        } else {
            return false;
        }
    }
    return true;
};
