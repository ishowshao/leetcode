/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    let result = [];
    let at = new Set();
    for (let i = 0; i < nums.length; i++) {
        let target = nums[i];
        if (at.has(target)) {
            continue;
        } else {
            at.add(target);
        }
        let two = twoSum(nums, target === 0 ? 0 : -target, i + 1);
        if (two.length) {
            two.forEach(item => {
                let arr = [target, ...item];
                result.push(arr);
            });
        }
    }
    return result;
};

/**
 * 
 * @param {Set} nums 
 * @param {number} target 
 * @returns 
 */
var twoSum = function (nums, target, offset) {
    let result = [];
    let has = {};
    for (let i = offset; i < nums.length; i++) {
        let num = nums[i];
        let peer = target - num;
        if (has[peer] === undefined) {
            has[num] = true;
        } else {
            result.push([num, peer]);
        }
    }
    return result;
};

console.log(threeSum([0,0,0,0]))