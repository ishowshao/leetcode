/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push([s[i], i]);
        }
        if (s[i] === ')') {
            if (stack[stack.length - 1] && stack[stack.length - 1][0] === '(') {
                stack.pop();
            } else {
                stack.push([')', i]);
            }
        }
    }
    if (stack.length === 0) {
        return [s];
    }
    console.log(stack);
    let removed = new Set();

    const [c, index] = stack[0];
    for (let i = 0; i <= index; i++) {
        if (s[i] === c) {
            removed.add(s.substring(0, i) + s.substring(i + 1));
        }
    }
    for (let i = 1; i < stack.length; i++) {
        let newRemoved = new Set();
        const [c, index] = stack[i];
        for (const str of removed) {
            for (let k = 0; k <= index - i; k++) {
                if (str[k] === c) {
                    newRemoved.add(str.substring(0, k) + str.substring(k + 1));
                }
            }
        }
        removed = newRemoved;
    }
    console.log(removed);
    return Array.from(removed).filter((el) => isValid(el));
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
