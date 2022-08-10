/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let start = 0;
    const length = gas.length;
    for (let i = 0; i < gas.length; i++) {
        if (cost[i] <= gas[i]) {
            start = i;
            let g = 0;
            let c = 0;
            let success = true;
            let j = 0;
            for (j = 0; j < length; j++) {
                const p = (start + j) % length;
                g += gas[p];
                c += cost[p];
                if (c > g) {
                    success = false;
                    break;
                }
            }
            if (success) {
                return i;
            } else {
                i += j;
            }
        }
    }
    return -1;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
