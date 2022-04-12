/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const M = board.length;
    const N = board[0].length;
    const paths = Array(M).fill(0).map(() => Array(N).fill(0));
    let index = 0;
    let wordLength = word.length;
    let result = false;
    const offsets = [[-1, 0], [0, -1], [0, 1], [1, 0]];
    
    if (M === 1 && N === 1 && wordLength === 1) {
        return board[0][0] === word;
    }

    const helper = (m, n) => {
        if (result) {
            return;
        }
        if (index === wordLength) {
            result = true;
            return;
        }

        let char = board[m][n];
        if (paths[m][n] === 0 && char === word[index]) {
            // for 四个相邻位置
            for (let i = 0; i < offsets.length; i++) {
                const [om, on] = offsets[i];
                const x = m + om;
                const y = n + on;
                if (x > -1 && x < M && y > -1 && y < N) {
                    index++;
                    paths[m][n] = 1;
                    helper(x, y);
                    paths[m][n] = 0;
                    index--;
                }
            }
        }
    };

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            helper(i, j);
        }
    }

    return result;
};

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABCCED'));
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'SEE'));
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABCB'));