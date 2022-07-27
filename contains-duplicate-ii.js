/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map[num] === undefined) {
            map[num] = i;
        } else {
            const pos = map[num];
            if (Math.abs(pos - i) <= k) {
                return true;
            } else {
                map[num] = i;
            }
        }
    }
    return false;
};
