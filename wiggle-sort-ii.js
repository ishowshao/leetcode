/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    const copy = [...nums];
    copy.sort((a, b) => a - b);
    console.log(copy);
    const half = nums.length % 2 === 0 ? nums.length / 2 : Math.ceil(nums.length / 2);
    const right = copy.splice(half, copy.length - half);
    copy.reverse();
    right.reverse();
    console.log(copy, right);
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            nums[i] = copy[i / 2];
        } else {
            nums[i] = right[Math.floor(i / 2)];
        }
    }
    // nums.push(nums.shift());
    // nums.push(nums.shift());
    console.log(nums);
};

console.log(wiggleSort([1, 3, 2, 2, 3, 1, 4]));
console.log(wiggleSort([4, 5, 5, 6]));
