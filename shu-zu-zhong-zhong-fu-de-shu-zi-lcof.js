/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (map[num] === undefined) {
            map[num] = 1;
        } else {
            return num;
        }
    }
};
