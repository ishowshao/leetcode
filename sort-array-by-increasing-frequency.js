/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    const f = {};
    nums.forEach((v) => {
        if (f[v] === undefined) {
            f[v] = 1;
        } else {
            f[v]++;
        }
    });
    nums.sort((a, b) => {
        const fa = f[a];
        const fb = f[b];
        if (fa === fb) {
            return b - a;
        } else {
            return fa - fb;
        }
    });
    return nums;
};
