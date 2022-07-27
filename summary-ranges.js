/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums.length === 0) {
        return [];
    }
    const ranges = [];
    let range = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        if (num === range[range.length - 1] + 1) {
            range.push(num);
        } else {
            ranges.push(range);
            range = [num];
        }
    }
    ranges.push(range);
    console.log(ranges);
    return ranges.map((range) => {
        if (range.length === 1) {
            return String(range[0]);
        } else {
            return `${range[0]}->${range[range.length - 1]}`;
        }
    });
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
