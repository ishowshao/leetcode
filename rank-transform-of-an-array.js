/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    const set = new Set(arr);
    const arrNew = Array.from(set);
    arrNew.sort((a, b) => a - b);
    return arr.map((el) => search(arrNew, el) + 1);
};

const search = (array, n) => {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (array[mid] === n) {
            return mid;
        }
        if (array[mid] < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
};

console.log(arrayRankTransform([40, 10, 20, 30]));
