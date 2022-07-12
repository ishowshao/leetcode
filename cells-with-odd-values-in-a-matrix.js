/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
    const arr = Array(m)
        .fill(0)
        .map(() => Array(n).fill(0));
    indices.forEach((el) => {
        const [a1, a2] = el;
        for (let i = 0; i < n; i++) {
            arr[a1][i]++;
        }
        for (let i = 0; i < m; i++) {
            arr[i][a2]++;
        }
    });
    let count = 0;
    arr.forEach((row) => {
        for (let i = 0; i < n; i++) {
            if (row[i] % 2 === 1) {
                count++;
            }
        }
    });
    return count;
};
