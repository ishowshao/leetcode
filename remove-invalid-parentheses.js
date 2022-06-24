/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    const sArr = s.split('');
    let [l, r] = countRemove(s);
    const strs = new Set();
    const helper = (sl, sr) => {
        if (l > 0) {
            // do remove
            for (let i = sl; i < sArr.length; i++) {
                if (sArr[i] === '(') {
                    sArr[i] = '';
                    l--;
                    helper(i, sr);
                    // undo remove
                    sArr[i] = '(';
                    l++;
                }
            }
        }
        if (r > 0) {
            for (let i = sr; i < sArr.length; i++) {
                if (sArr[i] === ')') {
                    sArr[i] = '';
                    r--;
                    helper(sl, i);
                    // undo remove
                    sArr[i] = ')';
                    r++;
                }
            }
        }
        if (l === 0 && r === 0) {
            // console.log(sArr);
            strs.add(sArr.join(''));
        }
    };
    helper(0, 0);
    // console.log(strs);
    return Array.from(strs).filter((el) => isValid(el));
};

const countRemove = (s) => {
    let l = 0;
    let r = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            l++;
        } else if (s[i] === ')') {
            if (l > 0) {
                l--;
            } else {
                r++;
            }
        }
    }
    return [l, r];
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

console.log(removeInvalidParentheses('()())()'));
console.log(removeInvalidParentheses('(a)())()'));
console.log(removeInvalidParentheses(')('));
console.log(removeInvalidParentheses('))('));
console.log(removeInvalidParentheses(')()('));
console.log(removeInvalidParentheses('(((k()(('));
console.log(removeInvalidParentheses(')(k(()'));
console.log(removeInvalidParentheses('()((((((()l('));
console.log(removeInvalidParentheses('())((((((((((b))('));
