// 我觉得我这个实现方法应该性能很好，不知道为啥在leetcode上提交以后在后6%
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let ones = [];
    const all = Array(grid.length + 2)
        .fill(0)
        .map(() => Array(grid[0].length + 2).fill(0));

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            all[i + 1][j + 1] = Number(grid[i][j]);
            if (all[i + 1][j + 1] === 1) {
                ones.push([i + 1, j + 1]);
            }
        }
    }

    console.log(all, ones);

    const islands = [];

    for (let i = 0; i < ones.length; i++) {
        let pos = ones[i];
        if (all[pos[0]][pos[1]] === 1) {
            islands.push(island(pos, all));
        }
    }

    console.log(islands);

    return islands.length;
};

const island = (pos, grid) => {
    let a = 0;
    const land = [pos];
    let b = land.length;
    grid[pos[0]][pos[1]] = 0;
    while (a !== b) {
        for (let i = a, b = land.length; i < b; i++) {
            let [x, y] = land[i];
            if (grid[x - 1][y] === 1) {
                land.push([x - 1, y]);
                grid[x - 1][y] = 0;
            }
            if (grid[x][y - 1] === 1) {
                land.push([x, y - 1]);
                grid[x][y - 1] = 0;
            }
            if (grid[x + 1][y] === 1) {
                land.push([x + 1, y]);
                grid[x + 1][y] = 0;
            }
            if (grid[x][y + 1] === 1) {
                land.push([x, y + 1]);
                grid[x][y + 1] = 0;
            }
        }
        a = b;
        b = land.length;
    }
    return land;
};

console.log(
    numIslands([
        ['1', '1', '1'],
        ['0', '1', '0'],
        ['1', '1', '1'],
    ])
);
