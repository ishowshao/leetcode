/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // let max = Number.NEGATIVE_INFINITY;
    let max = nums[0];
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        if (sum + num < num) {
            sum = num;
        } else {
            sum += num;
        }
        max = Math.max(sum, max);
    }
    return max;
};
// 原来这也是动态规划？
console.log(maxSubArray([5, 4, -1, 7, 8]));