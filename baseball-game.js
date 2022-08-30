/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    const ans = [];
    for (let i = 0; i < ops.length; i++) {
        const element = ops[i];
        if (element === 'C') {
            ans.pop();
        } else if (element === 'D') {
            ans.push(ans[ans.length - 1] * 2);
        } else if (element === '+') {
            ans.push(ans[ans.length - 2] + ans[ans.length - 1]);
        } else {
            ans.push(Number(element));
        }
    }
    return ans.reduce((p, c) => p + c, 0);
};
