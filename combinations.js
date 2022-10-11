/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const nums = Array(n).fill(0);
    for (let i = 1; i <= n; i++) {
        nums[i - 1] = i;
    }
    const ans = [];
    const array = [];
    const helper = (start, deep) => {
        if (deep === k) {
            // console.log(array);
            ans.push([...array]);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            array.push(nums[i]);
            helper(i + 1, deep + 1);
            array.pop();
        }
    };
    helper(0, 0);
    return ans;
};

console.log(combine(4, 2));
