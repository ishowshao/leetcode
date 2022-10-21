/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    nums.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if (sum % k !== 0) {
        return false;
    }
    const a = sum / k;
    if (nums[0] > a) {
        return false;
    }
    sum = 0;
    let array = [];
    const helper = (target, pos) => {
        if (target === 0) {
            // log pos
            console.log(pos);
            return true;
        }
        if (target < 0) {
            return false;
        }
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (!pos.includes(i)) {
                pos.push(i);
                if (helper(target - num, pos)) {
                    return true;
                }
                pos.pop();
            }
        }
        return false;
    };
    while (array.length < k) {
        let pos = [];
        const res = helper(a, pos);
        if (res) {
            console.log(pos);
            array.push(pos.map(p => nums[p]));
            pos.forEach((p) => {
                nums[p] = -1;
            });
            nums = nums.filter((n) => n !== -1);
        } else {
            return false;
        }
    }

    return true;
};

// console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));
// console.log(canPartitionKSubsets([2, 2, 2, 2, 3, 4, 5], 4));
// console.log(canPartitionKSubsets([4, 4, 6, 2, 3, 8, 10, 2, 10, 7], 4));
console.log(canPartitionKSubsets([4, 5, 9, 3, 10, 2, 10, 7, 10, 8, 5, 9, 4, 6, 4, 9], 5));
