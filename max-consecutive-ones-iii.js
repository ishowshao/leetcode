/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let left = 0;
    let right = 1;
    let zero = 1 - nums[0];
    let one = nums[0];
    while (right < nums.length) {
        if (k > zero) {
            if (nums[right]) {
                one++;
            } else {
                zero++;
            }
            right++;
        } else {
            if (zero === k && nums[right]) {
                one++;
                right++;
            } else {
                nums[right] ? one++ : zero++;
                nums[left] ? one-- : zero--;
                right++;
                left++;
            }
        }
    }
    let ans = right - left + (k - zero < 0 ? 0 : k - zero);
    if (ans > nums.length) {
        ans = nums.length;
    }
    return ans;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(longestOnes([0, 0, 0, 1, 1], 2)); // 4
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)); // 10
