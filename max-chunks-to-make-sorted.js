/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
    const min = Array(arr.length).fill(20);
    const max = Array(arr.length).fill(-1);
    let m = Number.POSITIVE_INFINITY;
    for (let i = arr.length - 1; i > -1; i--) {
        m = Math.min(m, arr[i]);
        min[i] = m;
    }
    m = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        m = Math.max(m, arr[i]);
        max[i] = m;
    }

    let l = min[0];
    let h = max[0];
    let section = 1;
    for (let i = 1; i < arr.length; i++) {
        let low = min[i];
        let high = max[i];
        if (low > h || high < l) {
            section++;
            l = low;
            h = high;
        } else {
            l = Math.min(l, low);
            h = Math.max(h, high);
        }
    }
    return section;
};

// console.log(maxChunksToSorted([3, 2, 1, 0]));
// console.log(maxChunksToSorted([2, 0, 1, 3]));
// console.log(maxChunksToSorted([1, 4, 0, 2, 3, 5]));
