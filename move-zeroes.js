/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    console.log(nums);
    let offset = [];
    let zeroCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroCount++;
        }
        offset.push(zeroCount);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[i - offset[i]] = nums[i];
        }
    }
    for (let i = 0; i < zeroCount; i++) {
        nums[nums.length - 1 - i] = 0;
    }
    console.log(nums);
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
