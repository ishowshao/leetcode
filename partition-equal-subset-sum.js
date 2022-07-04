/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    nums.sort((a, b) => b - a);
    const arr1 = [];
    const arr2 = [];
    let total1 = 0;
    let total2 = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (total1 <= total2) {
            arr1.push(num);
            total1 += num;
        } else {
            arr2.push(num);
            total2 += num;
        }
    }
    console.log(arr1, arr2);
    return total1 === total2;
};

// 这个方法只能通过大部分用例
console.log(canPartition([1, 2, 3, 5]));

// console.log(canPartition([3, 3, 3, 4, 5]));
