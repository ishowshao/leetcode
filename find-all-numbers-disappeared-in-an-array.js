/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const a = Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        a[nums[i]] = 1;
    }
    const result = [];
    for (let i = 1; i < a.length; i++) {
        if (a[i] === 0) {
            result.push(i);
        }
    }
    return result;
};
