/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    const wordsCounts = words.map(word => {
        const count = Array(26).fill(0);
        for (let i = 0; i < word.length; i++) {
            count[word.charCodeAt(i) - 97]++;
        }
        return count;
    });

    const ans = [];
    const word = words[0];
    for (let i = 0; i < word.length; i++) {
        let common = true;
        let code = word.charCodeAt(i) - 97;
        for (let j = 0; j < wordsCounts.length; j++) {
            const counts = wordsCounts[j];
            if (counts[code] === 0) {
                common = false;
                break;
            }
        }
        if (common) {
            ans.push(word[i]);
            wordsCounts.forEach(count => count[code]--);
        }
    }
    return ans;
};
