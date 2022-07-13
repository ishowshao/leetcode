/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let pre = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let temp = '';
        let str = strs[i];
        for (let j = 0; j < pre.length; j++) {
            if (pre[j] === str[j]) {
                temp += pre[j];
            } else {
                break;
            }
        }
        pre = temp;
    }
    return pre;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
