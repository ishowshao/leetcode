/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    const la = Array(nums.length).fill(0);
    const ra = Array(nums.length).fill(0);
    let l = 0;
    let r = 0;
    for (let i = 1; i < nums.length; i++) {
        l += nums[i - 1];
        la[i] = l;
        r += nums[nums.length - i];
        ra[nums.length - i - 1] = r;
    }
    let ans = -1;
    for (let i = 0; i < la.length; i++) {
        if (la[i] === ra[i]) {
            ans = i;
            break;
        }
    }
    console.log(la, ra);
    return ans;
};

console.log(pivotIndex([-1, -1, 0, 0, -1, -1]));
