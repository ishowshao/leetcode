// 这个看着是动态规划了

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    // f(m,n) = min{f(m-1,n), f(m,n-1)} + (m,n)
    let m = grid.length;
    let n = grid[0].length;
    let arr = Array(m).fill(0).map(() => Array(n).fill(0));
    arr[0][0] = grid[0][0];
    for (let j = 1; j < n; j++) {
        arr[0][j] = grid[0][j] + arr[0][j - 1];
    }
    for (let i = 1; i < m; i++) {
        arr[i][0] = grid[i][0] + arr[i - 1][0];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            arr[i][j] = Math.min(arr[i - 1][j], arr[i][j - 1]) + grid[i][j];
        }
    }
    // console.log(arr);
    return arr[m - 1][n - 1];
};

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
console.log(minPathSum([[1, 2, 3], [4, 5, 6]]))