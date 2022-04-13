/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let max = 0;
    for (let i = 0; i < heights.length; i++) {
        let height = heights[i];
        let left = -1;
        let right = -1;
        for (left = i; left > 0; left--) {
            if (height > heights[left - 1]) {
                break;
            }
        }
        for (right = i; right < heights.length - 1; right++) {
            if (height > heights[right + 1]) {
                break;
            }
        }
        // console.log(height, left, right);
        // console.log((right - left + 1) * height);
        max = Math.max(max, (right - left + 1) * height);
    }
    return max;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));