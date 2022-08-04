/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    const map = {
        R: [0,1],
        L: [0,-1],
        U: [-1,0],
        D: [1,0],
    };
    const p = [0, 0];
    for (let i = 0; i < moves.length; i++) {
        const m = moves[i];
        p[0] += map[m][0];
        p[1] += map[m][1];
    }
    return p[0] === 0 && p[1] === 0;
};
