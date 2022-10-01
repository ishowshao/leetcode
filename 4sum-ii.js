/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function (nums1, nums2, nums3, nums4) {
    const map4 = new Map();
    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            let sum = nums3[i] + nums4[j];
            map4.set(sum, map4.has(sum) ? map4.get(sum) + 1 : 1);
        }
    }
    let count = 0;
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            let sum = nums1[i] + nums2[j];
            if (map4.has(0 - sum)) {
                count += map4.get(0 - sum);
            }
        }
    }
    return count;
};
