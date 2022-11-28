/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
    const map = {};
    arr.forEach((value) => {
        if (map[value] === undefined) {
            map[value] = 1;
        } else {
            map[value]++;
        }
    });
    console.log(map);
    const keys = Object.keys(map)
        .map((value) => Number(value))
        .sort((a, b) => map[a] - map[b]);
    console.log(keys);
    let i = 0;
    for (i = 0; i < keys.length; i++) {
        if (k <= 0) {
            break;
        }
        if (map[keys[i]] <= k) {
            k -= map[keys[i]];
            delete map[keys[i]];
        } else {
            k = 0;
        }
    }
    console.log(i, keys.length);
    return Object.keys(map).length;
};

// console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3));
// console.log(findLeastNumOfUniqueInts([5, 5, 4], 1));
// console.log(findLeastNumOfUniqueInts([2, 4, 1, 8, 3, 5, 1, 3], 3));
console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3));
