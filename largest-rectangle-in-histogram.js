// 用单调栈把这个题做了
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    const leftEdge = Array(heights.length).fill(0);
    let stack = [{ value: -1, index: -1 }];
    for (let i = 0; i < heights.length; i++) {
        let height = heights[i];
        while (stack[stack.length - 1].value >= height) {
            stack.pop();
        }
        leftEdge[i] = stack[stack.length - 1].index;
        stack.push({ value: height, index: i });
    }
    // console.log(leftEdge);
    const rightEdge = Array(heights.length).fill(0);
    stack = [{ value: -1, index: heights.length }];
    for (let i = heights.length - 1; i > -1; i--) {
        let height = heights[i];
        while (stack[stack.length - 1].value >= height) {
            stack.pop();
        }
        rightEdge[i] = stack[stack.length - 1].index;
        stack.push({ value: height, index: i });
    }
    // console.log(rightEdge);
    let max = 0;
    for (let i = 0; i < heights.length; i++) {
        let height = heights[i];
        max = Math.max(max, (rightEdge[i] - leftEdge[i] - 1) * height);
    }
    return max;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));