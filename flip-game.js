/**
 * @param {string} currentState
 * @return {string[]}
 */
var generatePossibleNextMoves = function (currentState) {
    const ans = [];
    for (let i = 0; i < currentState.length - 1; i++) {
        if (currentState[i] === '+' && currentState[i + 1] === '+') {
            ans.push(currentState.substring(0, i) + '--' + currentState.substring(i + 2));
        }
    }
    return ans;
};
