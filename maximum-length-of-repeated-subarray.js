/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const mn = m + n;
    let ans = 0;
    for (let i = 0; i < mn; i++) {
        const ms = m - i < 0 ? 0 : m - i;
        const ns = m - i > 0 ? 0 : i - m;
        let max = 0;
        let length = 0;
        for (let j = 0; ms + j < m && ns + j < n; j++) {
            if (nums1[ms + j] === nums2[ns + j]) {
                length++;
            } else {
                if (length) {
                    max = Math.max(length, max);
                    length = 0;
                }
            }
        }
        max = Math.max(length, max);
        ans = Math.max(ans, max);
    }
    return ans;
};

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));
console.log(findLength([5, 14, 53, 80, 48], [50, 47, 3, 80, 83]));
