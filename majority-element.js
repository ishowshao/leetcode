/**
 * @param {number[]} nums
 * @return {number}
 */
// 摩尔投票法
var majorityElement = function (nums) {
    const counts = {};
    let max = 0;
    let maxNum = null;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (counts[num] === undefined) {
            counts[num] = 1;
        } else {
            counts[num] += 1;
        }
        if (counts[num] > max) {
            max = counts[num];
            maxNum = num;
        }
    }
    return maxNum;
};

console.log(majorityElement([3,2,3]))