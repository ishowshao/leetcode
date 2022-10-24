/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    const ans = [];
    const m = mat.length;
    const n = mat[0].length;
    const t = m + n - 1;
    let x = 0;
    let y = 0;
    let preX;
    let preY;
    for (let i = 0; i < t; i++) {
        while (mat[x] !== undefined && mat[x][y] !== undefined) {
            ans.push(mat[x][y]);
            preX = x;
            preY = y;
            if (i % 2 === 0) {
                x--;
                y++;
            } else {
                x++;
                y--;
            }
        }
        x = preX;
        y = preY;
        if (i % 2 === 0) {
            // r d
            if (mat[x] !== undefined && mat[x][y + 1] !== undefined) {
                y = y + 1;
            } else {
                x = x + 1;
            }
        } else {
            if (mat[x + 1] !== undefined && mat[x + 1][y] !== undefined) {
                x = x + 1;
            } else {
                y = y + 1;
            }
        }
    }
    return ans;
};

// 1 2 3 4
// 5 6 7 8

[0, 0], [0, 1], [1, 0], [1, 1], [0, 2], [1, 2];
console.log(
    findDiagonalOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
    ])
);
