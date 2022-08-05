/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }
    const m = numRows;
    const len = m + m - 2;
    const width = m - 1;
    const mod = s.length % len;
    const n = Math.floor(s.length / len) * width + (mod > m ? mod - m : 1);

    const matrix = Array(m).fill(' ').map(() => Array(n).fill(' '));
    for (let i = 0; i < s.length; i++) {
        let p = i % len;
        let d = Math.floor(i / len);
        let x = (p < m ? 0 : p - m + 1) + d * width;
        let y = p < m ? p : 2 * m - p - 2;
        matrix[y][x] = s[i];
    }
    // console.log(matrix.map((r) => r.join('')).join('\n'));
    let ans = '';
    matrix.forEach((row) => {
        row.forEach((c) => {
            if (c !== ' ') {
                ans += c;
            }
        });
    });
    return ans;
};

console.log(convert('PAYPALISHIRING', 4));
console.log(convert('PAYPALISHIRING', 3));
