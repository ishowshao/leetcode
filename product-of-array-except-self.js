// 以前也做过左边来一遍右边来一遍的题，这个题再次强化了这种方式确实是个常规解题思路
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let leftP = [];
    let temp = 1;
    for (let i = 0; i < nums.length; i++) {
        leftP.push(temp);
        temp *= nums[i];
    }

    let rightP = [];
    temp = 1;
    for (let i = nums.length - 1; i > -1; i--) {
        rightP[i] = temp;
        temp *= nums[i];
    }

    return leftP.map((el, i) => el * rightP[i]);
};

console.log(productExceptSelf([1, 2, 3, 4]));
