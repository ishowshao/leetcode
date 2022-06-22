/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const dp = Array(nums.length).fill(0);
    dp[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        // dp[i] = max(dp[j]) + 1;
        let maxj = 0;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                maxj = Math.max(maxj, dp[j]);
            }
        }
        dp[i] = maxj + 1;
    }
    console.log(dp);
    return Math.max(...dp);
};

// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
console.log(lengthOfLIS([1, 3, 6, 7, 11, 4, 10, 5, 6]));
console.log(lengthOfLIS([1, 3, 11, 10, 9, 4, 10, 5, 6]));
