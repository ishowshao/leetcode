/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        let s1 = stones.pop();
        let s2 = stones.pop();
        stones.push(Math.abs(s1 - s2));
    }
    return stones[0];
};
