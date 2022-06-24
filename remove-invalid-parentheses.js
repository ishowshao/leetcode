/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {

};

const isValid = (s) => {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
        }
        if (s[i] === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                stack.push(')');
            }
        }
    }
    return stack.length === 0;
};

// console.log(removeInvalidParentheses('()())()'));
// console.log(removeInvalidParentheses('(a)())()'));
// console.log(removeInvalidParentheses(')('));
// console.log(removeInvalidParentheses('))('));
// console.log(removeInvalidParentheses(')()('));
console.log(removeInvalidParentheses('(((k()(('));
