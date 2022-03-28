/**
 * @param {string} s 
 */
var longestPalindrome = function (s) {
    let length = s.length;
    let half = Math.floor(length / 2) + 1;
    let i = 0;
    let j = 0;
    let max = 0;
    let maxString = '';
    for (i = 0; i < length; i++) {
        console.log(s[i]);
        for (j = 1; j < half; j++) {
            console.log(s[i - j], s[i + j]);
            if (s[i - j] !== s[i + j]) {
                break;
            } else {
                if (j * 2 + 1 > max) {
                    max = j * 2 + 1;
                    maxString = s.substring(i - j, i + j + 1);
                }
            }
        }
        // console.log('--')
    }
    for (i = 0; i < length - 1; i++) {
        console.log(s[i], s[i + 1]);
        for (j = 0; j < half; j++) {
            let left = i - j;
            let right = i + 1 + j;
            console.log(s[left], s[right]);
            if (s[left] !== s[right]) {
                break;
            } else {
                if (right - left + 1 > max) {
                    max = right - left + 1;
                    maxString = s.substring(left, right + 1);
                }
            }
        }
        // console.log('--')
    }
    return maxString;
}

console.log(longestPalindrome('abcbdddddd'))