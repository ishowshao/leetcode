/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    let i = 0;
    let j = s.length;
    let ans = [];
    for (let k = 0; k < s.length; k++) {
        const ch = s[k];
        if (ch === 'I') {
            ans.push(i);
            i++;
        } else {
            ans.push(j);
            j--;
        }
    }
    ans.push(i);
    return ans;
};
