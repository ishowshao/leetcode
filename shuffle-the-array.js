/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    const ans = [];
    const n2 = n * 2;
    for (let i = 0; i < n2; i++) {
        if (i % 2 === 0) {
            ans.push(nums[i / 2]);
        } else {
            ans.push(nums[n + Math.floor(i / 2)]);
        }
    }
    return ans;
};
