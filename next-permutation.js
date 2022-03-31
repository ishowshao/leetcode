// 不是降序的情况下：
// 1.找到最末尾的递减序列，以及这个序列的前一个值 i     
// 如： [2,3,5,4,1] 则找到[5,4,1] nums[i]=3
// 2.将 i 后升序排列                                 
// 则：得到 [...,1,4,5]
// 3.将 i 后面的序列中 第一个大于nums[i]的值与其交换     
// 则：得到结果 [2,4,1,3,5]

// 这题规律太难找了，发现规律之后代码实现难度又不高，感觉不是在考代码
// 不适合当面试题目

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let position = -1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            position = i;
            break;
        }
    }
    for (let i = position + 1, j = nums.length - 1; i < j; i++, j--) {
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp; 
    }
    if (position === -1) {
        return;
    }
    let i = position + 1;
    while (nums[i] <= nums[position]) {
        i++;
    }
    let tmp = nums[position];
    nums[position] = nums[i];
    nums[i] = tmp;
    console.log(nums);
};

nextPermutation([1, 5, 1]);