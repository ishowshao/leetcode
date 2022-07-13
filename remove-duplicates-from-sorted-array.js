/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let a = 0;
    let b = 0;
    while (b < nums.length) {
        if (nums[a] === nums[b]) {
            b++;
        } else {
            let i = b;
            while (i > a) {
                nums[i] = nums[b];
                i--;
            }
            a++;
        }
    }
    console.log(nums);
    return a + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
