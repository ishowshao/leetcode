/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const map = {};
    const result = new Set();
    for (let i = 0; i < nums1.length; i++) {
        map[nums1[i]] = true;
    }
    for (let i = 0; i < nums2.length; i++) {
        if (map[nums2[i]] !== undefined) {
            result.add(nums2[i]);
        }
    }
    return Array.from(result);
};
