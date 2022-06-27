// 太TMD难了
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    nums = [1, ...nums, 1];
    const solves = Array(nums.length).fill(null).map(() => Array(nums.length).fill(null));
    // console.log(solves);

    const solve = (i, j) => {
        // 相邻的坐标中间没有数字，贡献是0
        if (i === j - 1) {
            return 0;
        }
        if (solves[i][j] !== null) {
            return solves[i][j];
        }
        let max = 0;
        for (let mid = i + 1; mid < j; mid++) {
            max = Math.max(max, nums[i] * nums[mid] * nums[j] + solve(i, mid) + solve(mid, j));
        }
        solves[i][j] = max;
        return max;
    };
    return solve(0, nums.length - 1);
};

console.log(maxCoins([3, 1, 5, 8]));
console.log(maxCoins([1, 5]));
// console.log(maxCoins([9, 76, 64, 21]));
