/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const has = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (has[num] === undefined) {
            has[num] = 1;
        } else {
            delete has[num];
        }
    }
    console.log(has);
    console.log(Object.values(has));
};

console.log(singleNumber([4, 1, 2, 1, 2]));