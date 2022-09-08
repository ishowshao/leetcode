/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    if (s <= 2) {
        return true;
    }
    let i = isPalindrome(s);
    if (i === true) {
        return true;
    }
    if (isPalindrome(s.substring(0, i) + s.substring(i + 1)) === true) {
        return true;
    }
    if (isPalindrome(s.substring(0, s.length - i - 1) + s.substring(s.length - i)) === true) {
        return true;
    }
    return false;
};

const isPalindrome = (s) => {
    console.log(s);
    const len = Math.floor(s.length / 2);
    let i;
    for (i = 0; i < len; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return i;
        }
    }
    return true;
};

// console.log(validPalindrome('abca'));
console.log(validPalindrome('eddze'));
