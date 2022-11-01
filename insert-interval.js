/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval];
    }
    const ans = [];
    const [m, n] = newInterval;
    let left = null;
    let right = null;
    let i = 0;
    for (i = 0; i < intervals.length; i++) {
        const [j, k] = intervals[i];
        if (k < m) {
            ans.push(intervals[i]);
        } else {
            break;
        }
    }
    if (i === intervals.length) {
        ans.push(newInterval);
        return ans;
    }
    let [j, k] = intervals[i];
    left = Math.min(j, m);

    // console.log(ans, i, left);

    for (; i < intervals.length; i++) {
        const [j, k] = intervals[i];
        if (j > n) {
            break;
        }
    }
    if (i === 0) {
        ans.push(newInterval);
    } else {
        [j, k] = intervals[i - 1];
        // console.log(j, k);
        right = Math.max(k, n);
        // console.log(right);
        ans.push([left, right]);
    }

    for (; i < intervals.length; i++) {
        ans.push(intervals[i]);
    }

    return ans;
};

console.log(insert([[1, 5]], [0, 0]));
