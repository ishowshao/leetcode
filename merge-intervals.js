/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const result = [];
    intervals.sort((a, b) => a[0] - b[0]);
    if (intervals.length === 1) {
        return intervals;
    }
    let first = intervals[0];
    let temp = [...first];

    for (let i = 1; i < intervals.length; i++) {
        let a = intervals[i];
        if (a[0] <= temp[1]) {
            if (a[1] > temp[1]) {
                temp[1] = a[1];
            }
        } else {
            result.push(temp);
            temp = [...a];
        }
    }
    result.push(temp);
    return result;
};

console.log(merge([[1,4],[2,3]]));
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));