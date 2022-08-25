/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    const a = [];
    const b = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 === 0) {
            a.push(num);
        } else {
            b.push(num);
        }
    }
    return [...a, ...b];
};
