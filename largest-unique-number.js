/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function (nums) {
    const map = {};
    nums.forEach((n) => (map[n] === undefined ? (map[n] = 1) : map[n]++));
    let max = -1;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map[num] === 1) {
            max = Math.max(max, num);
        }
    }
    return max;
};
