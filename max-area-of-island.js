/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = Array(m).fill(0).map(() => Array(n).fill(0));
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    let ans = 0;
    let count = 1;
    const dfs = (i, j) => {
        visited[i][j] = 1;
        for (let k = 0; k < 4; k++) {
            const [d0, d1] = directions[k];
            const i1 = i + d0;
            const j1 = j + d1;
            if (visited[i1] !== undefined && visited[i1][j1] !== undefined) {
                if (visited[i1][j1] === 0) {
                    visited[i1][j1] = 1;
                    if (grid[i1][j1] === 1) {
                        count++;
                        dfs(i1, j1);
                    }
                }
            }
        }
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (visited[i][j] === 0) {
                visited[i][j] = 1;
                if (grid[i][j] === 1) {
                    count = 1;
                    dfs(i, j);
                    ans = Math.max(ans, count);
                }
            }
        }
    }
    return ans;
};

// console.log(maxAreaOfIsland([
//     [0, 1, 0, 0],
//     [1, 1, 1, 0],
//     [0, 1, 1, 0],
//     [0, 1, 0, 0],
// ]))

console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]))
