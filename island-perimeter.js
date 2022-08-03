/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                count += 4;
                if (grid[i - 1] && grid[i - 1][j] === 1) {
                    // console.log(i, j, 'top');
                    count -= 2;
                }
                if (grid[i][j - 1] === 1) {
                    // console.log(i, j, 'left');
                    count -= 2;
                }
            }

        }
    }
    return count;
};
console.log(
    islandPerimeter([
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
    ])
);
