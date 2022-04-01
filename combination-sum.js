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
    let deduplication = {};
    let helper = (nums, sub) => {
        console.log(count++, combination);
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            if (sub < num) {
                break;
            }
            if (sub === num) {
                let c = [...combination, num];
                c.sort((a, b) => a - b);
                let key = c.toString();
                if (deduplication[key] === undefined) {
                    deduplication[key] = true;
                    result.push([...combination, num]);
                }
                break;
            }
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