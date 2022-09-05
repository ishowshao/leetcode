/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
    let odd = 0;
    position.forEach((x) => (odd += x % 2));
    return Math.min(odd, position.length - odd);
};
