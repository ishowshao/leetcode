/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    if (s === goal) {
        console.log(new Set(s.split('')));
        return new Set(s.split('')).size < s.length;
    }
    const diff1 = [];
    const diff2 = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diff1.push(s[i]);
            diff2.push(goal[i]);
        }
    }
    console.log(diff);
    const set = new Set(diff);
    return set.size === 2;
};

console.log(buddyStrings('ab', 'ab'))
