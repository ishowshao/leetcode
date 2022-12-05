/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
    const dp = Array(arr.length).fill(0);
    const stack = [0];
    const indexes = Array(arr.length).fill(-1); // -1 0 1 2
    for (let i = 1; i < arr.length; i++) {
        while (stack.length > 0 && arr[i] < arr[stack[stack.length - 1]]) {
            stack.pop();
        }
        stack.push(i);
        indexes[i] = stack[stack.length - 2] !== undefined ? stack[stack.length - 2] : -1;
        // console.log(stack, indexes);
    }
    console.log(stack, indexes);


    dp[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        dp[i] = arr[i] * (i - indexes[i]) + (indexes[i] > -1 ? dp[indexes[i]] : 0);
    }
    console.log(dp);
    return dp.reduce((prev, curr) => (prev + curr) % 1000000007, 0);
};

// console.log(sumSubarrayMins([3, 1, 2, 4]));
console.log(sumSubarrayMins([11, 81, 94, 43, 3]));
