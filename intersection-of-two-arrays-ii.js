/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const map = {};
    for (let i = 0; i < nums1.length; i++) {
        let num = nums1[i];
        if (map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }
    const result = [];
    for (let i = 0; i < nums2.length; i++) {
        let num = nums2[i];
        if (map[num]) {
            result.push(num);
            map[num]--;
        }
    }
    return result;
};
