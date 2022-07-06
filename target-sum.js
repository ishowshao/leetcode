/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    const a = [0];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0, len = a.length; j < len; j++) {
            a.push(a[j] + nums[i]);
            a[j] -= nums[i];
        }
        console.log(a);
    }
    console.log(a);
    return a.filter((e) => e === target).length;
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
