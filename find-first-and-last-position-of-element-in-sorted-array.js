/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let start = 0;
    let end = nums.length;
    let middle = -1;
    let find = false;
    while (start < end) {
        middle = Math.floor((start + end) / 2);
        if (nums[middle] === target) {
            find = true;
            break;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else if (nums[middle] > target) {
            end = middle;
        }
    }
    if (!find) {
        return [-1, -1];
    }
    let left = middle;
    let right = middle;
    while (nums[left] === target) {
        left--;
    }
    while (nums[right] === target) {
        right++;
    }
    return [left + 1, right - 1];
};

console.log(searchRange([5, 7, 7, 8, 8, 8, 10, 11, 12, 13, 14, 15, 16], 8));