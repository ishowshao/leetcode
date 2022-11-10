/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    console.log(nums1);

    nums2 = nums2.map((value, index) => [value, index, null]).sort((a, b) => a[0] - b[0]);
    console.log(nums2);
    let index = 0;
    let lastIndex = nums1.length - 1;
    for (let i = 0; i < nums1.length; i++) {
        const num = nums1[i];
        if (num > nums2[index][0]) {
            nums2[index][2] = num;
            index++;
        } else {
            nums2[lastIndex][2] = num;
            lastIndex--;
        }
    }
    return nums2.sort((a, b) => a[1] - b[1]).map(value => value[2]);
};

console.log(advantageCount([12, 24, 8, 32], [13, 25, 32, 11]));
