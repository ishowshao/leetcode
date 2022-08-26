/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b);
    let min = Number.POSITIVE_INFINITY;
    for (let i = 1; i < arr.length; i++) {
        min = Math.min(arr[i] - arr[i - 1], min);
    }
    const ans = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] === min) {
            ans.push([arr[i - 1], arr[i]]);
        }
    }
    return ans;
};
