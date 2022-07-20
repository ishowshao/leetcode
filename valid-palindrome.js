/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLocaleLowerCase();
    let s1 = '';
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (code >= 97 && code <= 122) {
            s1 += s[i];
        } else if (code >= 48 && code <= 57) {
            s1 += s[i];
        }
    }
    s = s1;
    let i = 0;
    let j = s.length - 1;
    let result = true;
    while (i < j && result) {
        if (s[i] === s[j]) {
            i++;
            j--;
        } else {
            result = false;
        }
    }
    return result;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('0P'));
