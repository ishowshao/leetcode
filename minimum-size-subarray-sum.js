/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0;
    let right = 0;
    let min = Number.POSITIVE_INFINITY;
    let sum = 0;
    for (right = 0; right < nums.length; right++) {
        sum += nums[right];
        if (sum >= target) {
            min = Math.min(min, right + 1);
            break;
        }
    }
    if (sum < target) {
        return 0;
    }
    while (right < nums.length) {
        if (sum >= target) {
            min = Math.min(min, right - left + 1);
            while (left < right) {
                sum -= nums[left];
                left++;
                if (sum >= target) {
                    min = Math.min(min, right - left + 1);
                } else {
                    break;
                }
            }
        }
        right++;
        sum += nums[right];
    }
    while (left < right) {
        sum -= nums[left];
        if (sum >= target) {
            left++;
            min = Math.min(min, right - left + 1);
        } else {
            break;
        }
    }
    return min;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
