// 这个题是不是只要检查0的左侧能不能跳跃过0？？？
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let j = 0;
    for (let i = nums.length - 2; i > -1; i--) {
        let num = nums[i];
        if (num !== 0) {
            continue;
        }
        let can = false;
        for (j = i - 1; j > -1; j--) {
            if (nums[j] > i - j) {
                can = true;
                i = j;
                break;
            }
        }
        if (!can) {
            return can;
        }
    }
    return true;
};

console.log(canJump([3, 2, 1, 0, 4]));