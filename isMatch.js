/**
 * 
 * @param {string} s 
 * @param {string} p 
 */
var isMatch = function (s, p) {
    pArr = p.split('');
    // console.log(pArr);
    const regexp = [];
    let last = '';
    for (let i = 0; i < pArr.length; i++) {
        let c = pArr[i];
        if (c === '*') {
            regexp[regexp.length - 1] = last + '*';
        } else {
            regexp.push(c);
        }
        last = c;
    }
    console.log(regexp);
    let length = s.length;
    let i = 0;
    let j = 0;
    for (i = 0; i < length && j < regexp.length;) {
        let c = s[i];
        let r = regexp[j];
        if (r.length === 2) {
            if (r[0] === '.') {
                i++;
                if (s[i] === undefined) {
                    j++;
                }
            } else {
                if (c === r[0]) {
                    i++;
                } else {
                    j++;
                }
                if (c !== s[i]) {
                    j++;
                }
            }
        } else if (r === '.') {
            i++;
            j++;
        } else {
            if (c === r) {
                i++;
                j++;
            } else {
                break;
            }
        }
    }
    console.log(i, j)
    if (i === length && j === regexp.length) {
        return true;
    }
    return false;
};

console.log(isMatch('aab', 'c*a*b'), true);
console.log(isMatch('aaa', 'a*a'), true);

isMatch('aaa', 'a*a')
    m(m('aaa', 'a*'), 'a')