/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    for (let i = 0; i <= nums.length; i++) {
        if (nums.filter((num) => num >= i).length === i) {
            return i;
        }
    }
    return -1;
};
