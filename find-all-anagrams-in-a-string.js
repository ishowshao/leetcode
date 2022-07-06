/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const pLength = p.length;
    const result = [];

    const pHash = Array(26).fill(0);
    for (let i = 0; i < p.length; i++) {
        pHash[p.charCodeAt(i) - 97]++;
    }
    // console.log(pHash);

    const hash = Array(26).fill(0);
    let length = s.length - p.length;
    for (let i = 0; i < p.length; i++) {
        hash[s.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < length + 1; i++) {
        if (isEqual(pHash, hash)) {
            result.push(i);
        }
        hash[s.charCodeAt(i) - 97]--;
        hash[s.charCodeAt(i + pLength) - 97]++;
    }
    return result;
};

const isEqual = (a, b) => {
    let equal = true;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            equal = false;
            break;
        }
    }
    return equal;
};
