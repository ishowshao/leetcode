/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    const dp = Array(nums.length + 1)
        .fill(false)
        .map(() => Array(target + 1).fill(false));

    dp[0][0] = true;

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j <= target; j++) {
            dp[i][j] = 
            (j % nums[i - 1] === 0 || dp[i - 1][j % nums[i - 1]]);
        }
    }
    console.log(dp);
    return 0;
};

console.log(combinationSum4([1, 2, 3], 4));
