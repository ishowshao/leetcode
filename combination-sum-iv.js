/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    const ans = [];
    nums.sort((a, b) => a - b);
    const helper = (arr, target) => {
        if (target < 0) {
            return;
        }
        if (target === 0) {
            ans.push([...arr]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];
            arr.push(n);
            helper(arr, target - n);
            arr.pop();
        }
    };
    helper([], target);
    return ans.length;
};

console.log(combinationSum4([1, 2, 3], 4));
