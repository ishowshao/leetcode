/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
    let counter = 0;
    const total = [...piles];
    for (let i = total.length - 2; i > -1; i--) {
        total[i] += total[i + 1];
    }

    const cache = Array(piles.length + 1).fill(null).map(() => Array(piles.length).fill(null));

    const helperA = (m, offset) => {
        if (offset >= piles.length) {
            return 0;
        }
        if (cache[m][offset] !== null) {
            return cache[m][offset];
        }
        counter++;

        let m2 = m * 2;
        let sums = []; // 每种可选项的最优解 [10, 9]
        let sum = 0;
        for (let x = 1; x <= m2; x++) {
            // 这里应该算 sum(x) + total(offset) - b()
            if (offset + x > piles.length) {
                break;
            }
            sum += piles[offset + x - 1];
            let res = sum + (offset + x >= piles.length ? 0 : total[offset + x]) - helperA(Math.max(m, x), offset + x);
            sums.push(res);
        }
        let ans = Math.max(...sums);
        cache[m][offset] = ans;
        return ans;
    };

    let ans = helperA(1, 0);
    console.log(ans, counter);
    return ans;
};

stoneGameII([2, 7, 9, 4, 4]);
stoneGameII([1, 2, 3, 4, 5, 100]);

// [2,7,9,4,4]
