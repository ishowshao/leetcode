/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let s = [
        [0, 0], [0, 3], [0, 6],
        [3, 0], [3, 3], [3, 6],
        [6, 0], [6, 3], [6, 6],
    ];
    for (let i = 0; i < 9; i++) {
        let arr = Array(10).fill(null);
        let arr2 = Array(10).fill(null);
        let arr3 = Array(10).fill(null);
        let p = s[i];
        for (let j = 0; j < 9; j++) {
            let c = board[i][j];
            if (c !== '.') {
                c = Number(c);
                if (arr[c] !== null) {
                    return false;
                } else {
                    arr[c] = c;
                }
            }
            let c2 = board[j][i];
            if (c2 !== '.') {
                c2 = Number(c2);
                if (arr2[c2] !== null) {
                    return false;
                } else {
                    arr2[c2] = c2;
                }
            }
            let c3 = board[p[0] + Math.floor(j / 3)][p[1] + j % 3];
            if (c3 !== '.') {
                c3 = Number(c3);
                if (arr3[c3] !== null) {
                    return false;
                } else {
                    arr3[c3] = c3;
                }
            }
        }
    }
};
