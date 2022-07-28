/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    const set = new Set(arr);
    const arrNew = Array.from(set);
    arrNew.sort((a, b) => a - b);
    return arr.map(el => arrNew.indexOf(el) + 1);
};
