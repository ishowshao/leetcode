/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const hash = Array(26).fill(0);
    for (let i = 0; i < ransomNote.length; i++) {
        const code = ransomNote.charCodeAt(i) - 97;
        hash[code]++;
    }
    for (let i = 0; i < magazine.length; i++) {
        const code = magazine.charCodeAt(i) - 97;
        if (hash[code] > 0) {
            hash[code]--;
        }
    }
    return hash.every(el => el === 0);
};
