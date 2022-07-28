/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (wordsDict, word1, word2) {
    const map = {};
    for (let i = 0; i < wordsDict.length; i++) {
        const word = wordsDict[i];
        if (map[word] === undefined) {
            map[word] = [i];
        } else {
            map[word].push(i);
        }
    }
    let min = Number.POSITIVE_INFINITY;
    let arr1 = map[word1];
    let arr2 = map[word2];
    for (let i = 0; i < arr1.length; i++) {
        const pos = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            min = Math.min(min, Math.abs(arr2[j] - pos));
        }
    }
    return min;
};
