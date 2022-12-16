/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    if (triangle.length === 1) {
        return triangle[0][0];
    }
    const P = Number.POSITIVE_INFINITY;
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            let a = triangle[i - 1][j - 1] === undefined ? P : triangle[i - 1][j - 1];
            let b = triangle[i - 1][j] === undefined ? P : triangle[i - 1][j];
            triangle[i][j] = Math.min(a, b) + triangle[i][j];
        }
    }
    return Math.min(...triangle[triangle.length - 1]);
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
