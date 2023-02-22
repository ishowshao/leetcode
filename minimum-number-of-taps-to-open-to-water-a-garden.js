/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function (n, ranges) {
    const garden = Array(n + 1).fill(null);
    for (let i = 0; i < ranges.length; i++) {
        if (ranges[i] > 0) {
            let l = i - ranges[i];
            let r = i + ranges[i];
            l = l < 0 ? 0 : l;
            r = r > n ? n : r;
            let length = r - l;
            for (let j = l; j <= r; j++) {
                if (garden[j] === null) {
                    garden[j] = [length, ranges[i], i];
                } else {
                    if (length > garden[j][0] || (length === garden[j][0] && ranges[i] > garden[j][1])) {
                        garden[j] = [length, ranges[i], i];
                    }
                }
            }
        }
    }
    // console.log(garden);
    let ans = 0;
    let prev = null;
    for (let i = 0; i < garden.length; i++) {
        if (garden[i] === null) {
            return -1;
        }
        if (garden[i][2] !== prev) {
            prev = garden[i][2];
            ans++;
        }
    }
    return ans;
};

// console.log(minTaps(5, [3, 4, 1, 1, 0, 0]));
// console.log(minTaps(9, [0, 5, 0, 3, 3, 3, 1, 4, 0, 4]));
console.log(minTaps(17, [0, 3, 3, 2, 2, 4, 2, 1, 5, 1, 0, 1, 2, 3, 0, 3, 1, 1]));
