/**
 * @param {string} s 
 */
var is = function (s) {
    let length = s.length;
    if (length === 1) {
        return true;
    }
    let i = 0;
    let j = length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

var is2 = function (s, i, j) {
    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

/**
 * 
 * @param {string} s 
 * @returns 
 */
var longestPalindrome = function (s) {
    const length = s.length;
    if (length < 2) {
        return s;
    }
    let len = length;
    while (len > 1) {
        for (let i = 0; i < length - len + 1; i++) {
            console.log(i, len, s.substring(i, len + i), is2(s, i, len + i - 1));
            if (is2(s, i, len + i - 1)) {
                // console.log()
                return s.substring(i, len + i);
            }
        }
        len--;
        console.log('\n');
    }
    return s[0];
};

console.log(longestPalindrome('aba'))