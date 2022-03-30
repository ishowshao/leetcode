/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (isLeft(char)) {
            stack.push(char);
        } else if (isRight(char)) {
            if (stack[stack.length - 1] === peer(char)) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};
var isLeft = (c) => {
    return c === '(' || c === '[' || c === '{';
};
var isRight = (c) => {
    return c === ')' || c === ']' || c === '}';
};
var peer = (c) => {
    let map = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    return map[c];
}

console.log(isValid('[()[]'));