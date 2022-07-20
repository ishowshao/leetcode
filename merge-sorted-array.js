/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    const nums = [];
    for (let i = 0; i < m; i++) {
        nums.push(nums1[i]);
    }
    while (i < m && j < n) {
        if (nums[i] > nums2[j]) {
            nums1[i + j] = nums2[j];
            j++;
        } else {
            nums1[i + j] = nums[i];
            i++;
        }
    }
    while (i < m) {
        nums1[i + j] = nums[i];
        i++;
    }
    while (j < n) {
        nums1[i + j] = nums2[j];
        j++;
    }
    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));