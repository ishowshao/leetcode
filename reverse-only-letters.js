/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    const n = s.length;
    const arr = [...s];
    let left = 0,
        right = n - 1;
    while (true) {
        while (left < right && !/^[a-zA-Z]+$/.test(s[left])) {
            left++;
        }
        while (right > left && !/^[a-zA-Z]+$/.test(s[right])) {
            right--;
        }
        if (left >= right) {
            break;
        }
        swap(arr, left, right);
        left++;
        right--;
    }
    return arr.join('');
};

const swap = (arr, left, right) => {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
};
