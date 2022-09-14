/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    const dp = Array(nums.length).fill(nums.length);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i < dp.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] + j >= i) {
                dp[i] = Math.min(dp[j] + 1, dp[i]);
            }
        }
    }
    console.log(dp);
    return dp[nums.length - 1];
};

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));
