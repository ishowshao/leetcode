/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
    let m = grid.length - 1;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (i === j) {
                if (grid[i][j] === 0) {
                    return false;
                }
                continue;
            }
            if (i + j === m) {
                if (grid[i][j] === 0) {
                    return false;
                }
                continue;
            }
            if (grid[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
};

console.log(
    checkXMatrix([
        [2, 0, 0, 1],
        [0, 3, 1, 0],
        [0, 5, 2, 0],
        [4, 0, 0, 2],
    ])
);
