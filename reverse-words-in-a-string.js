/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const array = s.split(' ');
    return array.filter(s => s !== '' && s !== ' ').reverse().join(' ');
};
