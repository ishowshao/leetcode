// 这是这个题最简单的代码写法，但是递归会很多层，不是最好的解法
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    if (m < 2 || n < 2) {
        return 1;
    }
    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
};

console.log(uniquePaths(51, 9));