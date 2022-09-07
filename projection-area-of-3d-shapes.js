/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
    let a1 = 0;
    let a2 = 0;
    let a3 = 0;
    for (let i = 0; i < grid.length; i++) {
        let rowMax = 0;
        let columnMax = 0;
        for (let j = 0; j < grid[0].length; j++) {
            rowMax = Math.max(rowMax, grid[i][j]);
            columnMax = Math.max(columnMax, grid[j][i]);
            a1 += grid[i][j] > 0 ? 1 : 0;
        }
        a2 += rowMax;
        a3 += columnMax;
    }
    return a1 + a2 + a3;
};
