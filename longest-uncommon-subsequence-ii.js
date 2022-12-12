/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
    let max = -1;
    for (let i = 0; i < strs.length; i++) {
        let flag = false;
        let a = strs[i];
        for (let j = 0; j < strs.length; j++) {
            if (j === i) {
                continue;
            } else {
                let b = strs[j];
                if (common(a, b)) {
                    flag = true;
                    break;
                }
            }
        }
        if (!flag) {
            max = Math.max(max, a.length);
        }
    }
    return max;
};

/**
 * @param {string} a
 * @param {string} b
 */
const common = (a, b) => {
    let pos = -1;
    for (let i = 0; i < a.length; i++) {
        const ch = a[i];
        pos = b.indexOf(ch, pos + 1);
        if (pos === -1) {
            return false;
        }
    }
    return true;
};

console.log(common('aabbccc', 'aabbcc'));

console.log(findLUSlength(['aba', 'cdc', 'eae']));
console.log(findLUSlength(['aaa', 'aaa', 'aa']));
console.log(findLUSlength(['aabbcc', 'aabbcc', 'bc', 'bcc', 'aabbccc']));
