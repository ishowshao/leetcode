/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (target < nums[0]) {
        return 0;
    }
    if (target > nums[nums.length - 1]) {
        return nums.length;
    }

    let left = 0;
    let right = nums.length - 1;
    let mid = 0;
    while (true) {
        mid = Math.floor((left + right) / 2);
        if (left === mid) {
            break;
        }
        let num = nums[mid];
        if (num === target) {
            // console.log(left, mid, right);
            // return;
            return mid;
        }
        if (num < target) {
            left = mid;
        } else {
            right = mid;
        }
    }
    // console.log(left, mid, right);
    return target > nums[left] ? left + 1 : left;
};

console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 7));
