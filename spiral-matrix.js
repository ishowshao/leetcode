/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    const result = [];

    let start = 0;
    let total = m * n;
    while (true) {
        if (start + 1 > m - 1 || start + 1 > n - 1) {
            break;
        }
        for (let i = start; i < n - 1; i++) {
            result.push(matrix[start][i]);
        }
        for (let i = start; i < m - 1; i++) {
            result.push(matrix[i][n - 1]);
        }
        for (let i = n - 1; i > start; i--) {
            result.push(matrix[m - 1][i]);
        }
        for (let i = m - 1; i > start; i--) {
            result.push(matrix[i][start]);
        }

        start++;
        m--;
        n--;
    }
    if (result.length < total) {
        if (m > n) {
            for (let i = start; i < m; i++) {
                result.push(matrix[i][start]);
            }
        } else {
            for (let i = start; i < n; i++) {
                result.push(matrix[start][i]);
            }
        }
    }

    console.log(result);
};

console.log(
    spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
);

console.log(
    spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
    ])
);

console.log(spiralOrder([[6, 9, 7]]));
