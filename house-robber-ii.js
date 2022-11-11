/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    if (nums.length === 2) {
        return Math.max(...nums);
    }
    const dp = Array(nums.length - 1).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }
    let a = dp[dp.length - 1];
    dp.fill(0);
    dp[0] = nums[1];
    dp[1] = Math.max(nums[1], nums[2]);
    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i + 1] + dp[i - 2]);
    }
    return Math.max(a, dp[dp.length - 1]);
};

console.log(rob([2, 3, 2, 2, 2]));
