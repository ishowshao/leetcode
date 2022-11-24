/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
    const len = [];
    let sub = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num <= right) {
            sub.push(num);
        } else {
            if (sub.length > 0 && Math.max(...sub) >= left) {
                len.push(sub);
            }
            sub = [];
        }
    }
    if (sub.length > 0 && Math.max(...sub) >= left) {
        len.push(sub);
    }
    console.log(len);
    return len.map((arr) => count(arr, left)).reduce((prev, curr) => prev + curr, 0);
};

const count = (array, left) => {
    // console.log(array, left)
    array = array.map((el) => (el >= left ? 1 : 0));
    // console.log(array);
    let l = -1;
    let r = -1;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i] === 1 ? i + 1 : (r + 1);
        if (array[i] === 1) {
            r = i;
            if (l === -1) {
                l = i;
            }
        }
    }
    console.log(sum);
    return sum;
};

// console.log(count([1, 0, 1, 1], 1));

// console.log(numSubarrayBoundedMax([2, 9, 2, 5, 6], 2, 8));
console.log(numSubarrayBoundedMax([2, 1, 4, 3], 2, 3));
// console.log(numSubarrayBoundedMax([7, 3, 6, 7, 1], 1, 4));
// console.log(numSubarrayBoundedMax([73, 55, 36, 5, 55, 14, 9, 7, 72, 52], 32, 69));
// console.log([876, 880, 482, 260, 132, 421, 732, 703, 795, 420, 871, 445, 400, 291, 358, 589, 617, 202, 755, 810, 227, 813, 549, 791, 418, 528, 835, 401, 526, 584, 873, 662, 13, 314, 988, 101, 299, 816, 833, 224, 160, 852, 179, 769, 646, 558, 661, 808, 651, 982, 878, 918, 406, 551, 467, 87, 139, 387, 16, 531, 307, 389, 939, 551, 613, 36, 528, 460, 404, 314, 66, 111, 458, 531, 944, 461, 951, 419, 82, 896, 467, 353, 704, 905, 705, 760, 61, 422, 395, 298, 127, 516, 153, 299, 801, 341, 668, 598, 98, 241].map(el => el < 658 ? 0 : (el >= 658 && el <= 719 ? 1 : 2)))
// console.log(numSubarrayBoundedMax([876, 880, 482, 260, 132, 421, 732, 703, 795, 420, 871, 445, 400, 291, 358, 589, 617, 202, 755, 810, 227, 813, 549, 791, 418, 528, 835, 401, 526, 584, 873, 662, 13, 314, 988, 101, 299, 816, 833, 224, 160, 852, 179, 769, 646, 558, 661, 808, 651, 982, 878, 918, 406, 551, 467, 87, 139, 387, 16, 531, 307, 389, 939, 551, 613, 36, 528, 460, 404, 314, 66, 111, 458, 531, 944, 461, 951, 419, 82, 896, 467, 353, 704, 905, 705, 760, 61, 422, 395, 298, 127, 516, 153, 299, 801, 341, 668, 598, 98, 241], 658, 719));
// console.log(count([55, 36, 5, 55, 14, 9, 7], 32));
