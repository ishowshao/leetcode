/**
 * @param {string[]} words
 * @return {string[]}
 */
 var stringMatching = function (words) {
    words.sort((a, b) => a.length - b.length);
    const ans = [];
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].indexOf(words[i]) !== -1) {
                ans.push(words[i]);
                break;
            }
        }
    }
    return ans;
};
