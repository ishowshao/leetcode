/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const medal = ['Gold Medal','Silver Medal','Bronze Medal'];
    const scoreSorted = [...score].sort((a, b) => b - a);

    return score.map(s => {
        const r = scoreSorted.indexOf(s);
        if (medal[r]) {
            return medal[r];
        }
        return String(r + 1);
    });
};
