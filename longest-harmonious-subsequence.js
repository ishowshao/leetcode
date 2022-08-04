/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }
    let max = 0;
    const keys = Object.keys(map).map((n) => Number(n)).sort((a, b) => a - b);
    keys.reduce((p, c) => {
        if (c - p === 1) {
            max = Math.max(max, map[p] + map[c]);
        }
        return c;
    });
    console.log(map, keys);
    return max;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
