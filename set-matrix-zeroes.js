/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const zeros = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                zeros.push([i, j]);
            }
        }
    }
    for (let i = 0; i < zeros.length; i++) {
        const [x, y] = zeros[i];
        for (let j = 0; j < n; j++) {
            matrix[x][j] = 0;
        }
        for (let k = 0; k < m; k++) {
            matrix[k][y] = 0;
        }
    }
};
