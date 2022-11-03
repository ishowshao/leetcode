/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    const length = nums.length;
    const ans = [[]];
    let array = [];
    const map = new Map();
    const helper = (container, count, start) => {
        if (count === 0) {
            array.push([...container]);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            const num = nums[i];
            if (num === null) {
                continue;
            }
            container.push(num);
            nums[i] = null;
            helper(container, count - 1, i);
            nums[i] = num;
            container.pop();
        }
    };
    for (let m = 1; m <= length; m++) {
        helper([], m, 0);
        array.forEach(el => {
            const key = el.join('.');
            if (!map.has(key)) {
                ans.push(el);
                map.set(key, true);
            }
        });
        array = [];
    }
    return ans;
};

console.log(subsetsWithDup([1, 2, 3, 4]));
