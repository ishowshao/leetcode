/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let i = 0;
    for (i = 0; i < matrix.length; i++) {
        if (matrix[i][0] > target) {
            break;
        }
    }
    if (i === 0) {
        return false;
    }
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i - 1][j] === target) {
            return true;
        }
    }
    return false;
};