/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let count = 0;
    let total = 0;
    let a2 = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] > 0) {
                total++;
            }
            if (grid[i][j] === 2) {
                a2.push([i, j]);
            }
        }
    }
    let direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    // 模拟
    while (true) {
        let a2count = a2.length;
        let a2copy = [...a2];
        a2copy.forEach((e) => {
            direction.forEach((d) => {
                const m = e[0] + d[0];
                const n = e[1] + d[1];
                if (grid[m] && grid[m][n] === 1) {
                    a2.push([m, n]);
                    grid[m][n] = 2;
                }
            });
        });
        if (a2count === a2.length) {
            break;
        }
        count++;
    }
    if (a2.length < total) {
        return -1;
    }
    return count;
};
