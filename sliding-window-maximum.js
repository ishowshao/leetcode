/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let total = 0;
    const slides = nums.length - k + 1;
    const s = [];

    let maxNumber = Number.NEGATIVE_INFINITY;
    let maxIndex = -1;
    for (let i = 0; i < k; i++) {
        if (nums[i] >= maxNumber) {
            maxNumber = nums[i];
            maxIndex = i;
        }
        total++;
    }
    s[0] = [maxNumber, maxIndex];
    console.log(s);
    for (let i = 1; i < slides; i++) {
        let [max, index] = s[i - 1];
        if (index < i) {
            // 最大值不在窗口内了，重新计算num, index
            max = Number.NEGATIVE_INFINITY;
            index = -1;
            for (let j = i; j < k + i; j++) {
                if (nums[j] >= max) {
                    max = nums[j];
                    index = j;
                }
                total++;
            }
            s[i] = [max, index];
        } else {
            // 只需要比较上个窗口最大值和下一个数字
            if (nums[k + i - 1] >= max) {
                max = nums[k + i - 1];
                index = k + i - 1;
            }
            s[i] = [max, index];
            total++;
        }
    }
    console.log(s, total);
    return s.map(el => el[0]);
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7, 3, 5, 7, 8, 2, 5, 1,2,3,1,2,3,1, 3, -1, -3, 5, 3,1, 3, -1, -3, 5, 3, 6, 7, 3, 5, 7, 8, 2, 5, 1,2,3,1,2,3, 6, 7, 3, 5, 7, 8, 2, 5, 1,2,3,1,2,3], 3));
