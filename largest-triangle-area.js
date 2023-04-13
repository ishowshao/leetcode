/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    let ans = 0;
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {
                const a = points[i];
                const b = points[j];
                const c = points[k];
                const area = 0.5 * Math.abs(a[0] * b[1] + b[0] * c[1] + c[0] * a[1] - c[0] * b[1] - b[0] * a[1] - a[0] * c[1]);
                if (area > ans) {
                    ans = area;
                }
            }
        }
    }
    return ans;
};
