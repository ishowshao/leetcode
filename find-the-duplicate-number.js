/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let slow = 0;
    let fast = 0;
    // step 1
    while (true) {
        slow = nums[slow];
        fast = nums[fast];
        fast = nums[fast];
        if (slow === fast) {
            break;
        }
    }
    console.log(slow, fast);
    slow = 0;
    while (true) {
        slow = nums[slow];
        fast = nums[fast];
        if (slow === fast) {
            break;
        }
    }
    return slow;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
// console.log(findDuplicate([3, 1, 3, 4, 2]));
