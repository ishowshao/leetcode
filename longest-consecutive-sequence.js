/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    const has = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (has[num] === undefined) {
            has[num] = 1;
        } else {
            continue;
        }
        if (has[num - 1] !== undefined && has[num + 1] !== undefined) {
            let left = has[num - 1];
            let right = has[num + 1];
            has[num - left] += right + 1;
            has[num + right] += left + 1;
        } else {
            if (has[num - 1] !== undefined) {
                let left = has[num - 1];
                has[num - left] += 1;
                has[num] = has[num - left];
            }
            if (has[num + 1] !== undefined) {
                let right = has[num + 1];
                has[num + right] += 1;
                has[num] = has[num + right];
            }
        }
    }
    return Math.max(...Object.values(has));
};

// console.log(longestConsecutive([100, 99, 97, 96, 98]));
console.log(longestConsecutive([1, 2, 0, 1]));