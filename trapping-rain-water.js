/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function (height) {
    let noWater = 0;
    let maxHeight = 0;
    let maxHeightIndex = -1;
    for (let i = 0, length = height.length; i < length; i++) {
        let h = height[i];
        noWater += h;
        if (h > maxHeight) {
            maxHeight = h;
            maxHeightIndex = i;
        }
    }

    let left = 0;
    let currentHeight = 0;
    for (let i = 0; i < maxHeightIndex; i++) {
        let h = height[i];
        if (h > currentHeight) {
            currentHeight = h;
        }
        left += currentHeight;
    }

    let right = 0;
    currentHeight = 0;
    for (let i = height.length - 1; i >= maxHeightIndex; i--) {
        let h = height[i];
        if (h > currentHeight) {
            currentHeight = h;
        }
        right += currentHeight;
    }

    return left + right - noWater;
};