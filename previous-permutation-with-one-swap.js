/**
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function (arr) {
    for (let i = arr.length - 2; i > -1; i--) {
        if (arr[i] > arr[i + 1]) {
            let j = i + 1;
            let pos = j;
            let d = arr[i] - arr[j];
            for (; j < arr.length; j++) {
                if (arr[j] < arr[i] && arr[i] - arr[j] < d) {
                    d = arr[i] - arr[j];
                    pos = j;
                }
            }
            let tmp = arr[i];
            arr[i] = arr[pos];
            arr[pos] = tmp;
            return arr;
        }
    }
    return arr;
};

console.log(prevPermOpt1([3, 1, 1, 3]));