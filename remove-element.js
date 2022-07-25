/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let lastIndex = nums.length - 1;
    for (; lastIndex > -1; lastIndex--) {
        if (nums[lastIndex] !== val) {
            break;
        }
    }
    for (let i = 0; i < lastIndex; i++) {
        let num = nums[i];
        if (num === val) {
            nums[i] = nums[lastIndex];
            nums[lastIndex] = val;
            while (nums[lastIndex] === val) {
                lastIndex--;
            }
        }
    }
    console.log(nums);
    return lastIndex + 1;
};

// console.log(removeElement([3, 2, 2, 3], 3));
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
// console.log(removeElement([2, 2, 3], 2));
console.log(removeElement([4, 2, 0, 2, 2, 1, 4, 4, 1, 4, 3, 2], 4));
