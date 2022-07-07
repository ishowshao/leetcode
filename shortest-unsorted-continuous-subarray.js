/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    const oldNums = [...nums];
    const stack = [[Number.NEGATIVE_INFINITY, -1]];
    const max = [Number.NEGATIVE_INFINITY, -1];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num >= stack[stack.length - 1][0]) {
            stack.push([num, i]);
        } else {
            while (true) {
                const el = stack.pop();
                if (el[0] > max[0]) {
                    max[0] = el[0];
                    max[1] = el[1];
                }
                nums[el[1]] = null;
                if (num >= stack[stack.length - 1][0]) {
                    stack.push([num, i]);
                    break;
                }
            }
        }
    }
    console.log(nums);
    let l = nums.indexOf(null);
    let r = nums.lastIndexOf(null);
    if (l === -1 && r === -1) {
        return 0;
    }
    console.log(l, r);
    if (r > -1) {
        console.log(max);
        // const rNum = oldNums[r];
        while (max[0] > oldNums[r + 1]) {
            r++;
        }
    }
    console.log(l, r);
    return r - l + 1;
};

// console.log(findUnsortedSubarray([2, 7, 6, 4, 8, 10, 9, 15]));
// console.log(findUnsortedSubarray([1, 3, 2, 2, 2, 4]));
// console.log(findUnsortedSubarray([2, 3, 3, 2, 4]));
// console.log(findUnsortedSubarray([1, 3, 5, 4, 2]));
// console.log(findUnsortedSubarray([1, 5, 3, 2, 4, 6, 7]));
// console.log(findUnsortedSubarray([2, 2, 2, 2, 2]));
// console.log(findUnsortedSubarray([1, 2, 3, 3, 3]));
