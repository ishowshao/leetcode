/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const ans = [];
    const helper = (k, target, i, array) => {
        if (k === 0) {
            if (target === 0) {
                ans.push([...array]);
            }
            return;
        }
        if (k === 1) {
            if (target > i && target < 10) {
                array.push(target);
                ans.push([...array]);
                array.pop();
            }
            return;
        } else {
            for (let j = i + 1; j < 10; j++) {
                array.push(j);
                helper(k - 1, target - j, j, array);
                array.pop();
                if (target - j < 0) {
                    break;
                }
            }
        }
    };
    helper(k, n, 0, []);
    return ans;
};

console.log(combinationSum3(3, 9));
