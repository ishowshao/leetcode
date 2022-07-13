/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let length = nums.length;
    let n = nums[0];
    let count = 0;
    for (let i = 1; i < length; i++) {
        if (n === nums[i]) {
            nums[i] = null;
            count++;
        } else {
            n = nums[i];
        }
    }
    console.log(nums, count);
    return length - count;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
