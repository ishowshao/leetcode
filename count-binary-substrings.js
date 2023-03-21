/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    const counts = [];
    let c = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            c++;
        } else {
            counts.push(c);
            c = 1;
        }
    }
    counts.push(c);
    // console.log(counts);
    let ans = 0;
    for (let i = 1; i < counts.length; i++) {
        ans += Math.min(counts[i - 1], counts[i]);
    }
    return ans;
};

console.log(countBinarySubstrings('00110011'));
