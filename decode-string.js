/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    // 48 - 57 : 0-9
    // 91 [  93 ]
    // 97 - 122
    let str = '';
    const stack = [];
    let repeat = 0;
    let el = null;
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        if (code === 91) {
            el = { repeat: repeat, str: '' };
            repeat = 0;
            stack.push(el);
        } else if (code === 93) {
            let el = stack.pop();
            let add = ''.padEnd(el.repeat * el.str.length, el.str);
            if (stack.length > 0) {
                stack[stack.length - 1].str += add;
            } else {
                str += add;
            }
        } else if (code > 47 && code < 58) {
            repeat = repeat * 10 + Number(s[i]);
        } else {
            if (stack.length > 0) {
                stack[stack.length - 1].str += s[i];
            } else {
                str += s[i];
            }
        }
    }
    return str;
};

console.log(decodeString('3[a]2[bc]'));
console.log(decodeString('3[a2[c]]'));
console.log(decodeString('2[abc]3[cd]ef'));
