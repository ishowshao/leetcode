/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    if (k === 1) {
        return s.length;
    }
    const r = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        r[s.charCodeAt(i) - 97]++;
    }
    const map = new Map();
    r.forEach((count, index) => {
        map.set(String.fromCharCode(index + 97), count >= k);
    });
    // console.log(r);
    let max = 0;
    for (let i = 0; i <= s.length - k; i++) {
        loop: for (let j = i + k; j <= s.length; j++) {
            const sub = s.substring(i, j);
            const count = Array(26).fill(0);
            for (let m = 0; m < sub.length; m++) {
                if (!map.get(sub[m])) {
                    break loop;
                }
                count[sub.charCodeAt(m) - 97]++;
            }
            if (count.some((value) => value < k && value > 0)) {
                continue;
            }
            max = Math.max(max, sub.length);
        }
    }
    return max;
};

console.log(longestSubstring('ababbc', 2));
