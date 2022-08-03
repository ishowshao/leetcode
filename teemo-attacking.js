/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let d = 0;
    for (let i = 0; i < timeSeries.length - 1; i++) {
        const t = timeSeries[i];
        if (t + duration - 1 < timeSeries[i + 1]) {
            d += duration;
        } else {
            d += timeSeries[i + 1] - t;
        }
    }
    return d + duration;
};
