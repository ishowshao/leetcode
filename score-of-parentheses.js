/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(');
        } else {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
                stack.push(1);
            } else {
                let n = 0;
                while (stack[stack.length - 1] !== '(') {
                    n += stack.pop();
                }
                stack.pop();
                stack.push(n * 2);
            }
        }
    }
    let sum = 0;
    for (let i = 0; i < stack.length; i++) {
        sum += stack[i];
    }
    return sum;
};

console.log(scoreOfParentheses('(()())()(())'));
