/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    let array = Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        array[s.charCodeAt(i) - 97]++;
    }

    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        array[code - 97]--;
        if (stack.includes(code)) {
            continue;
        }
        while (stack.length > 0 && code < stack[stack.length - 1]) {
            const n = stack[stack.length - 1];
            if (array[n - 97] > 0) {
                stack.pop();
            } else {
                break;
            }
        }

        stack.push(code);
    }

    return stack.map((v) => String.fromCharCode(v)).join('');
};
