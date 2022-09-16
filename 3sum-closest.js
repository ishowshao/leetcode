/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let min = Number.POSITIVE_INFINITY;
    let sum = null;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            // 这个循环可以改二分查找
            const newTarget = target - nums[i] - nums[j];
            let left = j + 1;
            let right = nums.length - 1;
            while (left < right) {
                let mid = Math.floor((left + right) / 2);
                if (nums[mid] === newTarget) {
                    return target;
                }
                if (nums[mid] > newTarget) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            let d = Math.abs(nums[i] + nums[j] + nums[left] - target);
            if (d < min) {
                min = d;
                sum = nums[i] + nums[j] + nums[left];
            }
            if (left + 1 < nums.length) {
                let d = Math.abs(nums[i] + nums[j] + nums[left + 1] - target);
                if (d < min) {
                    min = d;
                    sum = nums[i] + nums[j] + nums[left + 1];
                }
            }
        }
    }
    return sum;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
