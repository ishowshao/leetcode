/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 1) {
        return [[1]];
    }
    if (numRows === 2) {
        return [[1],[1,1]]
    }
    const arr = [[1],[1,1]];
    for (let i = 3; i <= numRows; i++) {
        let last = arr[arr.length - 1];
        let el = [1];
        for (let j = 0; j < i - 2; j++) {
            el.push(last[j] + last[j + 1]);
        }
        el.push(1);
        arr.push(el);
    }
    return arr;
};

console.log(generate(5));
