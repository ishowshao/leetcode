/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 冒泡排序 应该是个比较差的解法
// var sortColors = function (nums) {
//     for (let j = nums.length - 1; j > -1; j--) {
//         for (let i = 0; i < j; i++) {
//             if (nums[i] > nums[i + 1]) {
//                 let temp = nums[i];
//                 nums[i] = nums[i + 1];
//                 nums[i + 1] = temp;
//             }
//         }
//     }

//     return nums;
// };

var sortColors = function (nums) {
    const map = {
        0: 0,
        1: 0,
        2: 0,
    };
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]]++;
    }
    let index = 0;
    for (let key in map) {
        let count = map[key];
        let num = Number(key);
        let i = index;
        for (; i < index + count; i++) {
            nums[i] = num;
        }
        index = i;
    }
    console.log(map);

    return nums;
};

console.log(sortColors([1, 2, 0]));