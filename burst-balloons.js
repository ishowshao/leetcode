/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    const arr = [];
    let temp = [];
    const helper = (nums) => {
        if (nums.length === 0) {
            arr.push([...temp]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            temp.push(num);
            const n = [...nums];
            n.splice(i, 1);
            helper(n);
            temp.pop();
        }
    };
    helper(nums);
    console.log(arr);
};

// [3,5,8] --> [3,8] --> [8] --> []
// 3*5*8  1*3*8 1*8*1
console.log(maxCoins([1, 2, 3, 4, 5, 6]));
