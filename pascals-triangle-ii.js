/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const rows = [[1], [1, 1], [1, 2, 1]];
    for (let i = 3; i <= rowIndex; i++) {
        const prev = rows[i - 1];
        const row = [1];
        for (let j = 1; j < i; j++) {
            row[j] = prev[j - 1] + prev[j];
        }
        row.push(1);
        rows.push(row);
    }
    return rows[rowIndex];
    console.log(rows);
};

console.log(getRow(3));
