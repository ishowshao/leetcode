/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    nums.sort((a, b) => a - b);
    const length = nums.length;
    let ans = 0;
    for (let i = 0; i < length - 2; i++) {
        for (let j = i + 1; j < length - 1; j++) {
            for (let k = j + 1; k < length; k++) {
                if (nums[i] + nums[j] > nums[k]) {
                    ans++;
                } else {
                    break;
                }
            }
        }
    }
    return ans;
};

console.log(triangleNumber([4, 2, 3, 4]));
