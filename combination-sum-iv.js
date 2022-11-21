/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    const dp = Array(target + 1).fill(0);

    dp[0] = 1;

    for (let i = 1; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            const num = nums[j];
            if (num <= i) {
                dp[i] += dp[i - num];
            }
        }
    }
    console.log(dp);
    return dp[dp.length - 1];
};

console.log(combinationSum4([1, 2, 3], 4));
