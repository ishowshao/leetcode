/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
    const dp = Array(nums.length).fill(0);
    const cnt = Array(nums.length).fill(0);
    let maxLength = 0;
    dp[0] = 1;
    cnt[0] = 1;
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1;
        cnt[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    cnt[i] = cnt[j];
                } else if (dp[j] + 1 === dp[i]) {
                    cnt[i] += cnt[j];
                }
            }
        }
        if (dp[i] > maxLength) {
            maxLength = dp[i];
            ans = cnt[i];
        } else if (dp[i] === maxLength) {
            ans += cnt[i];
        }
    }
    return ans;
};

console.log(findNumberOfLIS([1, 3, 5, 4, 7]));
// console.log(findNumberOfLIS([2, 2, 2, 2, 2]));
