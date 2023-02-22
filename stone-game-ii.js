/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
    let m = 1;
    let ans = Math.max(helperA(1, 0), helperA(2, 0));
    const helperA = (take, offset, current, m) => {
        if (offset > piles.length) {
            return 0;
        }
        if (take + offset >= piles.length) {
            for (let i = offset; i < piles.length; i++) {
                current += piles[i];
            }
            return current;
        } else {
            for (let i = 0; i < take; i++) {
                current += piles[offset + i];
            }
        }
        let m2 = m * 2;
        let arr = [];
        for (let x = 1; x <= m2; x++) {
            arr.push(helperB(x, take + offset, current, Math.max(m, x)));
        }
        const maxB = Math.max(...arr);
        const takeB = arr.indexOf(maxB) + 1;
        m = Math.max(m, takeB);
        m2 = m * 2;
        const results = [];
        return Math.max(helperA(1, takeB + offset), helperA(2, takeB + offset));
    };
    const helperB = (take, offset, current, m) => {

    };
};

// [2,7,9,4,4]
// [2,9,max(2,9),]