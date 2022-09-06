/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const queue = [[sr, sc]];
    const d = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];
    const c = image[sr][sc];
    if (c === color) {
        return image;
    }
    while (queue.length > 0) {
        const [m, n] = queue.shift();
        image[m][n] = color;
        d.forEach(offset => {
            const [om, on] = offset;
            if (image[m + om] && image[m + om][n + on] === c) {
                queue.push([m + om, n + on]);
            }
        });
    }
    return image;
};
