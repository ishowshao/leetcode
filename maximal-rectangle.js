/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    const height = matrix.length;
    const width = matrix[0].length;
    const rt = Array(height).fill(0).map(() => Array(width).fill(0));
    const maxRt = Array(height).fill(0).map(() => Array(width).fill(0));
    for (let j = 0; j < height; j++) {
        let count = 0;
        for (let i = 0; i < width; i++) {
            if (matrix[j][i] === '1') {
                count++;
            } else {
                count = 0;
            }
            rt[j][i] = count;
        }
    }
    console.log(rt);

    for (let j = 0; j < width; j++) {
        let max = 0;
        let stack = [-1, 0];
        for (let i = 1; i < height; i++) {
            while (stack.length > 1 && rt[i][j] <= rt[stack[stack.length - 1]][j]) {
                let index = stack.pop();
                max = Math.max(max, (i - index) * rt[i][j]);
                maxRt[index][j] = max;
            }
            stack.push(i);
        }
        while (stack.length > 1) {
            let index = stack.pop();
            max = Math.max(max, (height - index) * rt[index][j]);
            maxRt[index][j] = max;
        }
    }
    console.log(maxRt);
};

console.log(
    maximalRectangle([
        ['1', '0', '1', '0', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0'],
    ])
);
