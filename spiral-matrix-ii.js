/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const matrix = Array(n)
        .fill(0)
        .map(() => Array(n).fill(0));
    let m = matrix.length;
    n = matrix[0].length;
    // const result = [];

    let start = 0;
    let total = m * n;
    let index = 1;
    while (true) {
        if (start + 1 > m - 1 || start + 1 > n - 1) {
            break;
        }
        for (let i = start; i < n - 1; i++) {
            matrix[start][i] = index++;
        }
        for (let i = start; i < m - 1; i++) {
            matrix[i][n - 1] = index++;
        }
        for (let i = n - 1; i > start; i--) {
            matrix[m - 1][i] = index++;
        }
        for (let i = m - 1; i > start; i--) {
            matrix[i][start] = index++;
        }

        start++;
        m--;
        n--;
    }
    if (index < total + 1) {
        if (m > n) {
            for (let i = start; i < m; i++) {
                matrix[i][start] = index++;
            }
        } else {
            for (let i = start; i < n; i++) {
                matrix[start][i] = index++;
            }
        }
    }
    return matrix;
};
