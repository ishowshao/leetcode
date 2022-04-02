/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];
    let item = [];
    const helper = (nums) => {
        if (nums.length === 0) {
            result.push([...item]);
        }
        for (let i = 0; i < nums.length; i++) {
            item.push(nums[i]);
            let arr = [...nums];
            arr.splice(i, 1);
            helper(arr);
            item.pop();
        }
    };
    helper(nums);
    return result;
};

console.log(permute([1, 2, 3]));