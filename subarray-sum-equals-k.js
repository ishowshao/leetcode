/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const sums = [0, ...nums];
    for (let i = 1; i < sums.length; i++) {
        sums[i] += sums[i - 1];
    }

    let result = 0;
    const length = nums.length;
    for (let len = 1; len <= length; len++) {
        for (let i = 0; i <= length - len; i++) {
            let sum = sums[len + i] - sums[i];
            if (sum === k) {
                result++;
            }
        }
    }
    return result;
};

console.log(subarraySum([1, 2, 3], 3));
