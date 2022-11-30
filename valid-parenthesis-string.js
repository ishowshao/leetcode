/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    const stack = [];
    const index = [];
    const stars = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(');
            index.push(i);
        } else if (s[i] === ')') {
            if (stack.length > 0 && stack[stack.length - 1] === '(') {
                stack.pop();
                index.pop();
            } else {
                stack.push(')');
                index.push(i);
            }
        } else if (s[i] === '*') {
            stars.push(i);
        }
    }
    console.log(stack);
    console.log(index);
    console.log(stars);
    if (index.length > stars.length) {
        return false;
    }
    while (stack.length > 0) {
        if (stack[0] === '(') {
            if (stars[stars.length - stack.length] > index[0]) {
                stars.splice(stars.length - stack.length, 1);
                stack.shift();
                index.shift();
            } else {
                return false;
            }
        } else {
            if (stars[0] < index[0]) {
                stack.shift();
                index.shift();
                stars.shift();
            } else {
                return false;
            }
        }
    }

    // for (let i = 0; i < index.length; i++) {
    //     if (stars[i] > index[i]) {
    //         return false;
    //     }
    // }
    return true;
};

console.log(checkValidString('()(())(((((()())(()))))()(*()))()()()()((()(())())*((((())))*())()(()()))*((()(()(()))))(()())(*(*'));