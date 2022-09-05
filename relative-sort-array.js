/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    const map = {};
    arr2.forEach((v, i) => map[v] = i);
    return arr1.sort((a, b) => {
        if (map[a] !== undefined && map[b] !== undefined) {
            return map[a] - map[b];
        } else if (map[a] !== undefined) {
            return -1;
        } else if (map[b] !== undefined) {
            return 1;
        } else {
            return a - b;
        }
    });
};
