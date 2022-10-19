/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
    const distance = (pa, pb) => {
        return Math.sqrt((pa[0] - pb[0]) * (pa[0] - pb[0]) + (pa[1] - pb[1]) * (pa[1] - pb[1]));
    };
    const equal = (a, b) => {
        return Math.abs(a - b) < 0.0000001;
    };
    const edge = [distance(p1, p2), distance(p2, p3), distance(p3, p4), distance(p4, p1), distance(p1, p3), distance(p2, p4)];
    if (edge.some(e => e === 0)) {
        return false;
    }
    edge.sort((a, b) => a - b);
    if (equal(edge[0], edge[1]) && equal(edge[1], edge[2]) && equal(edge[2], edge[3])) {
        if (equal(edge[4], edge[5])) {
            return true;
        }
    }
    return false;
};

// console.log(validSquare([0,0], [1,1], [1,0], [0,1]));
console.log(validSquare([1,0], [-1,0], [0,1], [0,-1]));