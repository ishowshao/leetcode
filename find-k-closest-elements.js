/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    const nums = arr.map(n => Math.abs(n - x));
    // console.log(nums);
    let left = 0;
    let right = 0;

    let min = Number.POSITIVE_INFINITY;
    let index = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
            index = i;
        }
    }
    // console.log(min, index);
    left = index;
    right = left + 1;

    const ans = [];
    while (ans.length < k) {
        // console.log(nums[left], nums[right]);
        if (nums[left] <= nums[right]) {
            if (left < 0) {
                ans.push(arr[right]);
                right++;
            } else {
                ans.push(arr[left]);
                left--;
            }
        } else {
            if (right > nums.length - 1) {
                ans.push(arr[left]);
                left--;
            } else {
                ans.push(arr[right]);
                right++;
            }
        }
    }
    // console.log(ans);
    ans.sort((a, b) => a - b);
    return ans;
};

// console.log(findClosestElements([1, 3, 5, 7, 20], 5, 6));
console.log(findClosestElements([1], 1, 1));
