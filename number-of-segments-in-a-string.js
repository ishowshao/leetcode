/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    s = s.trim().replace(/ +/g, ' ');
    if (s === '') {
        return 0;
    }
    if (s === ' ') {
        return 0;
    }
    console.log(s, encodeURIComponent(s));
    console.log(s.split(' '));
    return s.split(' ').length;
};

console.log(countSegments(',  , , ,        a, eaefa'));
