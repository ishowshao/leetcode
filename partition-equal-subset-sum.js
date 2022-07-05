// 这个题应该是搜索若干元素的和等于总和的一半
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let max = 0;
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        total += num;
        max = Math.max(max, num);
    }
    if (total % 2 === 1) {
        return false;
    }
    let target = total >> 1;
    if (max > target) {
        return false;
    }

    let n = nums.length;
    const dp = Array(n).fill(false).map(() => Array(target + 1).fill(false));
    // 初始化
    for (let i = 0; i < n; i++) {
        dp[i][0] = true;
    }
    dp[0][nums[0]] = true;
    // 初始化结束
    for (let i = 1; i < n; i++) {
        for (let j = 1; j <= target; j++) {
            if (j < nums[i]) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = (dp[i - 1][j] || dp[i - 1][j - nums[i]]);
            }
        }
    }
    console.log(dp);
    return dp[n - 1][target];
};

// 这个方法只能通过大部分用例
console.log(canPartition([2, 2, 3, 5]));

// console.log(canPartition([3, 3, 3, 4, 5]));
// console.log(canPartition([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 99, 97]));
