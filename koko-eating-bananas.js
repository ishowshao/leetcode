/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    const max = Math.max(...piles);
    const getH = (piles, n) => {
        let sum = 0;
        for (let i = 0; i < piles.length; i++) {
            sum += Math.ceil(piles[i] / n);
        }
        return sum;
    };

    let left = 1;
    let right = max;
    let mid = -1;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        let hh = getH(piles, mid);
        if (hh === h) {
            break;
        }
        if (hh > h) {
            left = mid + 1;
        }
        if (hh < h) {
            right = mid - 1;
        }
    }
    let hh = getH(piles, mid);
    if (hh > h) {
        while (true) {
            mid++;
            hh = getH(piles, mid);
            if (hh < h) {
                return mid;
            }
        }
    }
    if (hh <= h) {
        while (true) {
            mid--;
            hh = getH(piles, mid);
            if (hh > h) {
                return mid + 1;
            }
        }
    }
    return mid;
};

// console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
// console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
// console.log(minEatingSpeed([312884470], 312884469));
console.log(minEatingSpeed([1, 1, 1, 999999999], 10));
