/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let a = 0;
    let b = n - 1;
    while (a < m && b > -1) {
        if (matrix[a][b] === target) {
            return true;
        }
        if (matrix[a][b] > target) {
            b--;
        } else {
            a++;
        }
    }
    return false;
};

console.log(
    searchMatrix(
        [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25],
        ],
        26
    )
);
