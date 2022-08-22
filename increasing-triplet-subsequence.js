/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    const minArr = [nums[0]];
    let min = nums[0];
    const maxArr = Array(nums.length).fill(0);
    maxArr[maxArr.length - 1] = nums[nums.length - 1];
    let max = nums[nums.length - 1];
    for (let i = 1; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
        minArr[i] = min;
        max = Math.max(max, nums[nums.length - 1 - i]);
        maxArr[nums.length - 1 - i] = max;
    }
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num > minArr[i] && num < maxArr[i]) {
            return true;
        }
    }
    return false;
};

console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
console.log(increasingTriplet([1, 5, 0, 4, 1, 3]));
