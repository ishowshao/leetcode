/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
    let sum = 0;
    let pre = Array(hours.length).fill(0);
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] > 8) {
            sum++;
        } else {
            sum--;
        }
        pre[i] = sum;
    }
    console.log(pre, pre.findIndex(i => i > 0));
};

console.log(longestWPI([9, 9, 6, 0, 6, 6, 9, 9, 9]));
console.log(longestWPI([9, 6, 9]));
console.log(longestWPI([6, 9, 6]));
