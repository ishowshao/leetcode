/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
    const ranges = [];
    let prev = lower - 1;
    for (let i = 0; i < nums.length; i++) {
        let range = [prev, nums[i]];
        ranges.push(range);
        prev = nums[i];
    }
    ranges.push([prev, upper + 1]);
    console.log(ranges);
    const result = [];
    ranges.forEach(el => {
        const [a, b] = el;
        if (a + 1 < b) {
            if (a + 2 === b) {
                result.push([a + 1]);
            } else {
                result.push([a + 1, b - 1]);
            }
        }
    });
    console.log(result);
    return result.map(el => el.join('->'));
};

console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99));
