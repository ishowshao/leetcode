// 这题我听过但是没看过也没做过
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // n = 1  i0
    // n = 2  max(i0, i1)
    // n = 3  max(i0 + i2, i1)
    // n = 4  max(i0 + i2, i1 + i3, i0 + i3) (n2 + i3, n1 + i2)
    // n = 5  max(n3 + i4, n2 + i3)
    // n = 6  max(n4 + i5, n3 + i4)
    const length = nums.length;
    const arr = Array(length).fill(0);
    arr[0] = nums[0];
    if (length > 1) {
        arr[1] = Math.max(nums[0], nums[1]);
    }
    if (length > 2) {
        arr[2] = Math.max(nums[0] + nums[2], nums[1]);
    }
    for (let i = 3; i < length; i++) {
        arr[i] = Math.max(arr[i - 3] + nums[i - 1], arr[i - 2] + nums[i]);
    }
    // console.log(arr);
    return arr[length - 1];
};

// 这是个典型的动态规划题
console.log(rob([2, 7, 9, 3, 1]));
