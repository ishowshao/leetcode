/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let left = 0;
    let right = 0;
    const map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = [i];
        } else {
            map[s[i]].push(i);
        }
    }
    console.log(map);
    const ans = [];
    while (left < s.length) {
        const c = s[left];
        const range = map[c];
        right = range[range.length - 1];
        for (let i = left + 1; i <= right; i++) {
            const c = s[i];
            const r = map[c];
            if (r[r.length - 1] > right) {
                right = r[r.length - 1];
            }
        }
        ans.push(right - left + 1);
        left = right + 1;
    }
    return ans;
};

console.log(partitionLabels('ababcbacadefegdehijhklij'));