/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    const copy = [];
    for (let i = 0; i < board.length; i++) {
        copy[i] = [];
        for (let j = 0; j < board[0].length; j++) {
            copy[i][j] = board[i][j];
        }
    }
    for (let i = 0; i < copy.length; i++) {
        for (let j = 0; j < copy[0].length; j++) {
            const c = count(copy, i, j);
            if (c < 2 || c > 3) {
                board[i][j] = 0;
            }
            if (c === 3) {
                board[i][j] = 1;
            }
        }
    }
};

const count = (board, i, j) => {
    let c = 0;
    if (board[i - 1] && board[i - 1][j - 1]) {
        c++;
    }
    if (board[i] && board[i][j - 1]) {
        c++;
    }
    if (board[i + 1] && board[i + 1][j - 1]) {
        c++;
    }
    if (board[i - 1] && board[i - 1][j + 1]) {
        c++;
    }
    if (board[i] && board[i][j + 1]) {
        c++;
    }
    if (board[i + 1] && board[i + 1][j + 1]) {
        c++;
    }
    if (board[i - 1] && board[i - 1][j]) {
        c++;
    }
    if (board[i + 1] && board[i + 1][j]) {
        c++;
    }
    return c;
};
