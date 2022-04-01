/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    let result = [];
    let combination = [];
    let count = 0;
    let helper = (nums, sub) => {
        console.log(count++, combination);
        if (sub < 0) {
            return;
        }
        if (sub === 0) {
            result.push([...combination]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            combination.push(num);
            helper(nums, sub - num);
            combination.pop();
        }
    };
    helper(candidates, target);
    return result;
};
const sum = (nums) => {
    let r = 0;
    for (let i = 0; i < nums.length; i++) {
        r += nums[i];
    }
    return r;
};

console.log(combinationSum([2, 3, 6, 7], 7));