/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
    const arr = [a, b, c];
    arr.sort((a, b) => b - a);
    let score = 0;
    if (arr[0] - arr[1] >= arr[2]) {
        score = arr[2] + arr[1];
    } else {
        score = Math.ceil((arr[1] + arr[2] - arr[0]) / 2);
        arr[2] -= score;
        arr[1] -= score;
        score += arr[2] + arr[1];
    }
    return score;
};
