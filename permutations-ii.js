/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const length = nums.length;
    // const stack = [];
    const ans = [];
    const anss = [];
    const cache = new Map();
    const helper = (nums) => {
        if (ans.length === length) {
            const key = ans.join(',');
            if (!cache.has(key)) {
                cache.set(key, 1);
                anss.push([...ans]);
            }
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 100) {
                let num = nums[i];
                ans.push(num);
                nums[i] = 100;
                helper(nums);
                nums[i] = num;
                ans.pop();
            }
        }
    };
    helper(nums);
    return anss;
};

console.log(permuteUnique([1, 1, 2]));
