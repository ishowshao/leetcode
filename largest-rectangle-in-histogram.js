/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    const minHeights = Array(heights.length).fill(0);
    minHeights[heights.length - 1] = heights[heights.length - 1];
    for (let i = heights.length - 2; i > -1; i--) {
        let height = heights[i];
        if (height < minHeights[i + 1]) {
            minHeights[i] = height;
        } else {
            minHeights[i] = minHeights[i + 1];
        }
    }
    console.log(minHeights);
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));