/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    const map = [];
    for (let i = 0; i < key.length; i++) {
        const ch = key[i];
        if (ch === ' ') {
            continue;
        }
        if (!map.includes(ch)) {
            map.push(ch);
        }
        if (map.length === 26) {
            break;
        }
    }
    const map2 = {};
    map.forEach((ch, index) => (map2[ch] = index));
    let ans = '';
    for (let i = 0; i < message.length; i++) {
        const ch = message[i];
        if (ch === ' ') {
            ans += ' ';
        } else {
            ans += String.fromCharCode(map2[ch] + 97);
        }
    }
    return ans;
};

console.log(decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv'));
