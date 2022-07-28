/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const arr = Array(nums.length + 1).fill(-1);
    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]] = 1;
    }
    console.log(arr);
    return arr.indexOf(-1);
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
