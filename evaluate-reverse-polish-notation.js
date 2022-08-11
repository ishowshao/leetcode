/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (isNaN(token)) {
            console.log(token);
            const op = token;
            const n2 = stack.pop();
            const n1 = stack.pop();
            if (op === '+') {
                stack.push(n1 + n2);
            } else if (op === '-') {
                stack.push(n1 - n2);
            } else if (op === '*') {
                stack.push(n1 * n2);
            } else {
                stack.push(n1 / n2 > 0 ? Math.floor(n1 / n2) : Math.ceil(n1 / n2));
            }
        } else {
            stack.push(Number(token));
        }
    }
    return stack[0];
};

// console.log(evalRPN(['2', '1', '+', '3', '*']));
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']));
