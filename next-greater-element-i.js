/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const map = {};
    for (let index = 0; index < nums2.length; index++) {
        const num = nums2[index];
        map[num] = index;
    }
    const ans = Array(nums1.length).fill(-1);
    for (let i = 0; i < nums1.length; i++) {
        const num = nums1[i];
        const index = map[num];
        for (let j = index; j < nums2.length; j++) {
            if (nums2[j] > num) {
                ans[i] = nums2[j];
                break;
            }
        }
    }
    return ans;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
