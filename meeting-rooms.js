/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i++) {
        const meet = intervals[i];
        if (meet[0] < intervals[i - 1][1]) {
            return false;
        }
    }
    return true;
};
