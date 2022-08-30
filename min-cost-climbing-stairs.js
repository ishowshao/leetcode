/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    cost.push(0)
    for (let i = 2; i < cost.length; i++) {
        cost[i] = Math.min(cost[i - 2], cost[i - 1]) + cost[i];
    }
    console.log(cost);
    return cost[cost.length - 1];
};

console.log(minCostClimbingStairs([10, 15, 20]));
