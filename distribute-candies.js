/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    const target = candyType.length / 2;
    candyType = new Set(candyType);
    if (candyType.size < target) {
        return candyType.size;
    }
    return target;
};
