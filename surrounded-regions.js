/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const m = board.length;
    const n = board[0].length;
    const b = Array(m + 2).fill('').map(() => Array(n + 2).fill(''));
    board.forEach((r, i) => r.forEach((v, j) => b[i + 1][j + 1] = v));

    const v = Array(m + 2).fill(0).map(() => Array(n + 2).fill(0));
    const points = [[0, -1], [-1, 0], [0, 1], [1, 0]];
    const search = (i, j) => {
        const path = [[i, j]];
        const stack = [[i, j]];
        v[i][j] = 1;
        let edge = false;
        while (stack.length > 0) {
            const node = stack.pop();
            for (let i = 0; i < points.length; i++) {
                const point = points[i];
                const m = node[0] + point[0];
                const n = node[1] + point[1];
                if (b[m][n] === 'O' && v[m][n] === 0) {
                    stack.push([m, n]);
                    path.push([m, n]);
                    v[m][n] = 1;
                }
                if (b[m][n] === '') {
                    edge = true;
                }
            }
        }
        if (!edge) {
            return path;
        }
        return null;
    };
    const paths = [];
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < b[0].length; j++) {
            if (b[i][j] === 'O' && v[i][j] === 0) {
                const path = search(i, j);
                console.log(path);
                path && paths.push(path);
            }
        }
    }
    paths.forEach(path => path.forEach((point) => {
        const [i, j] = point;
        board[i - 1][j - 1] = 'X';
    }));
};

console.log(solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]));
console.log(solve([["O","O","O"],["O","O","O"],["O","O","O"]]));