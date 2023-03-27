/**
 * Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.
 * Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (map.has(num)) {
            let arr = map.get(num);
            arr[0]++;
            arr[2] = i;
        } else {
            map.set(num, [1, i, i]);
        }
    }
    let ans = 0;
    let max = 0;
    for (const [count, start, end] of map.values()) {
        if (count > max) {
            max = count;
            ans = end - start + 1;
        } else if (count === max) {
            ans = Math.min(ans, end - start + 1);
        }
    }
    return ans;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1]));