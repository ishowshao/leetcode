/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const y = { a: 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1 };
    const arr = s.split('');
    const yArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (y[arr[i]]) {
            yArr.push(arr[i]);
        }
    }
    yArr.reverse();
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (y[arr[i]]) {
            arr[i] = yArr[j];
            j++;
        }
    }
    return arr.join('');
};
