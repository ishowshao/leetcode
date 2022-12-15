/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let prev = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === prev) {
            count++;
            if (count > 2) {
                nums.splice(i, 1);
                count--;
                i--;
            }
        } else {
            prev = nums[i];
            count = 1;
        }
    }
    return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
