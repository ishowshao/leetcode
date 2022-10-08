/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const ans = [];
    const freq = {};
    for (let i = 0; i < candidates.length; i++) {
        if (freq[candidates[i]] === undefined) {
            freq[candidates[i]] = 1
        } else {
            freq[candidates[i]]++;
        }
    }
    const nums = Object.keys(freq).map(ns => Number(ns)).sort((a, b) => a - b);
    // console.log(nums, freq);
    // return;

    let arr = [];
    const helper = (start, rest) => {
        if (rest === 0) {
            // console.log(arr);
            ans.push([...arr]);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            const n = nums[i];
            let f = 1;
            for (f = 1; f <= freq[n]; f++) {
                if (rest - n * f < 0) {
                    break;
                }
                arr.push(n);
                helper(i + 1, rest - n * f);
            }
            while (f > 1) {
                arr.pop();
                f--;
            }
        }
    }
    helper(0, target);
    return ans;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));

// console.log([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].length);

30