/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const ka = nums.splice(nums.length - k % nums.length, k % nums.length);
    console.log(ka);
    nums.unshift(...ka);
    console.log(nums);
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 10));
