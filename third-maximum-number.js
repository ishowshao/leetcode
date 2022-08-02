/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    const set = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        for (let j = 0; j < set.length; j++) {
            if (num === set[j]) {
                break;
            }
            if (num > set[j]) {
                set.splice(j, 0, num);
                set.pop();
                break;
            }
        }
    }
    console.log(set);
    return isFinite(set[2]) ? set[2] : set[0];
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([1, 2, 2]));
