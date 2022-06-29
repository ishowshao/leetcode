/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    const array = [];
    map.forEach((value, key) => {
        array.push([value, key]);
    });
    array.sort((a, b) => b[0] - a[0]);
    // console.log(map);
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(array[i][1]);
    }
    return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
