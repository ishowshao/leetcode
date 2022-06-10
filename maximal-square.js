// 这个题比较有意思，我尝试一下自己想的一个方法
// 自己的方法失败了
// 看了一眼评论，这题竟然可以动态规划，我没看细节，自己试试
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    const x = matrix.length;
    const y = matrix[0].length;
    let max = 0;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (matrix[i][j] === '1') {
                max = Math.max(max, expand(i, j, matrix));
            }
        }
    }
    return max;
};

const expand = (x, y, grid) => {
    const pos = [[[0,0]],[[0,1],[1,1],[1,0]],[[0,2],[1,2],[2,2],[2,1],[2,0]],[[0,3],[1,3],[2,3],[3,3],[3,2],[3,1],[3,0]],[[0,4],[1,4],[2,4],[3,4],[4,4],[4,3],[4,2],[4,1],[4,0]]];
    let i;
    for (i = 0; i < pos.length; i++) {
        const edge = pos[i];
        let pass = true;
        for (let j = 0; j < edge.length; j++) {
            const [dx, dy] = edge[j];
            if (grid[x + dx][y + dy] !== '1') {
                pass = false;
                break;
            }
        }
        if (!pass) {
            break;
        }
    }
    return Math.max(...pos[i - 1][0]) + 1;
}

const gen = () => {
    // 00
    // 01 11 10
    // 02 12 22 21 20
    // 03 13 23 33 32 31 30
    const pos = [];
    for (let i = 0; i < 300; i++) {
        const x = [];
        const y = [];
        for (let j = 0; j < i * 2 + 1; j++) {
            x.push(j > i ? i : j);
        }
        for (let j = 0; j < i * 2 + 1; j++) {
            y.push(i * 2 - j > i ? i : i * 2 - j);
        }

        const edge = [];
        for (let i = 0; i < x.length; i++) {
            edge.push([x[i], y[i]]);
        }
        pos.push(edge);
    }
    return pos;
    // console.log(JSON.stringify(pos));
};

// console.log(gen());
console.time('gen');
gen();
console.timeEnd('gen');
// console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]));
