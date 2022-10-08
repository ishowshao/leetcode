/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    const stack = [];
    while (pushed.length > 0) {
        if (stack[stack.length - 1] === popped[0]) {
            stack.pop();
            popped.shift();
        } else {
            const element = pushed.shift();
            stack.push(element);
        }
    }
    while (stack.length > 0) {
        if (stack[stack.length - 1] === popped[0]) {
            stack.pop();
            popped.shift();
        } else {
            return false;
        }
    }
    return true;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
