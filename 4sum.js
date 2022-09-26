/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const cache = {};
    const ans = [];
    nums.sort((a, b) => a - b);
    for (let a = 0; a < nums.length - 3; a++) {
        for (let b = a + 1; b < nums.length - 2; b++) {
            const result = twoSum(nums, b + 1, target - nums[a] - nums[b]);
            // console.log(nums[a], nums[b], result);
            if (result.length > 0) {
                result.forEach(item => {
                    const key = [nums[a], nums[b], item[0], item[1]].join(',');
                    if (cache[key] === undefined) {
                        ans.push([nums[a], nums[b], item[0], item[1]]);
                        cache[key] = true;
                    }
                });
            }
        }
    }
    return ans;
};

const twoSum = (nums, offset, target) => {
    const result = [];
    const map = {};
    for (let i = offset; i < nums.length; i++) {
        if (map[target - nums[i]] === undefined) {
            map[nums[i]] = nums[i];
        } else {
            result.push([nums[i], target - nums[i]]);
        }
    }
    return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
