/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
    let ans = [];
    queries.forEach((q) => {
        let result = true;
        const p = pattern;
        let i = 0;
        let j = 0;
        while (i < p.length) {
            if (j === q.length) {
                result = false;
                break;
            }
            if (p.charCodeAt(i) < 97 && q.charCodeAt(j) < 97) {
                if (p[i] === q[j]) {
                    i++;
                    j++;
                } else {
                    result = false;
                    break;
                }
            } else if (p.charCodeAt(i) < 97 && q.charCodeAt(j) >= 97) {
                j++;
            } else if (p.charCodeAt(i) >= 97 && q.charCodeAt(j) >= 97) {
                if (p[i] === q[j]) {
                    i++;
                    j++;
                } else {
                    j++;
                }
            } else if (p.charCodeAt(i) >= 97 && q.charCodeAt(j) < 97) {
                result = false;
                break;
            }
        }
        while (j < q.length) {
            if (q.charCodeAt(j) < 97) {
                result = false;
            }
            j++;
        }
        ans.push(result);
    });
    return ans;
};

// console.log('A'.charCodeAt(0), 'a'.charCodeAt(0));
console.log(camelMatch(['FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack'], 'FB'));
console.log(camelMatch(['FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack'], 'FoBa'));
