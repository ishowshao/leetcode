/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
    let ans = '';
    let word = '';
    let sw = false;
    const map = {};
    knowledge.forEach(kv => map[kv[0]] = kv[1]);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            sw = true;
        } else if (s[i] === ')') {
            sw = false;
            // handle word
            if (map[word] === undefined) {
                ans += '?';
            } else {
                ans += map[word];
            }
            word = '';
        } else {
            if (sw) {
                word += s[i];
            } else {
                ans += s[i];
            }
        }
    }
    return ans;
};
