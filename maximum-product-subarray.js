/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    const arrays = [];
    let array = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            array.push(nums[i]);
        } else {
            arrays.push(array);
            array = [];
        }
    }
    arrays.push(array);
    console.log(arrays, arrays.length);
    if (arrays.length > 1) {
        arrays.push([0]);
    }
    let p = arrays.map(arr => {
        return product(arr);
    });
    console.log(p);
    return Math.max(...p);
};

const product = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    if (arr.length === 1) {
        return arr[0]
    }
    let a = 1;
    let left = 0;
    let right = 0;
    for (let i = 0, len = arr.length - 1; i < arr.length; i++) {
        let nl = arr[i];
        let nr = arr[len - i];
        a *= nl;
        left *= nl;
        right *= nr;
        if (left === 0 && nl < 0) {
            left = 1;
        }
        if (right === 0 && nr < 0) {
            right = 1;
        }
    }
    console.log(a, left, right);
    return Math.max(a, left, right);
};

// console.log(product([2, 2, -2, -2, -2, 2]));

console.log(maxProduct([0]));