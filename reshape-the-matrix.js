/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    const m = mat.length;
    const n = mat[0].length;
    if (m * n !== r * c) {
        return mat;
    }
    const ans = Array(r).fill(0).map(() => Array(c).fill(0));
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            let index = i * c + j;
            let mm = Math.floor(index / n);
            let nn = index % n;
            ans[i][j] = mat[mm][nn];
        }
    }
    return ans;
};
