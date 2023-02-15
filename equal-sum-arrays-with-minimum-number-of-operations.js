/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
    let map1 = [0, 0, 0, 0, 0, 0, 0];
    let map2 = [0, 0, 0, 0, 0, 0, 0];
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < nums1.length; i++) {
        sum1 += nums1[i];
        map1[nums1[i]]++;
    }
    for (let i = 0; i < nums2.length; i++) {
        sum2 += nums2[i];
        map2[nums2[i]]++;
    }
    let a, b;
    if (sum1 >= sum2) {
        a = map1;
        b = map2;
    } else {
        a = map2;
        b = map1;
    }
    // 优先调整小于差值的最大可变更数字 如 1->6 或者 6->1 变更是5
    let ans = 0;
    let position = 6;
    let diff = Math.abs(sum1 - sum2);

    while (position > 0 && diff > 0) {
        let d = Math.ceil(diff / (position - 1));
        if (a[position] + b[7 - position] >= d) {
            diff -= d * (position - 1);
            diff = Math.max(diff, 0);
            ans += d;
        } else {
            diff -= (a[position] + b[7 - position]) * (position - 1);
            ans += a[position] + b[7 - position];
        }
        position--;
    }

    return diff === 0 ? ans : -1;
};

console.log(minOperations([1, 2, 3, 4, 5, 6], [1, 1, 2, 2, 2, 2]));