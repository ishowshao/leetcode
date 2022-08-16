/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    s = s + ' ';
    let n = null;
    const stack = [];
    let cache = null;
    let op = null;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        const code = s.charCodeAt(i);
        if (code > 47 && code < 58) {
            n = n * 10 + (code - 48);
        } else {
            if (n !== null) {
                if (cache !== null) {
                    if (op === '*') {
                        n *= cache;
                    } else {
                        n = (cache / n > 0) ? Math.floor(cache / n) : Math.ceil(cache / n);
                    }
                    cache = null;
                }
                stack.push(op === '-' ? -n : n);
                n = null;
            }
            /////
            if (c === '*' || c === '/') {
                cache = stack.pop();
            }

            if (c !== ' ') {
                op = c;
            }
        }
    }

    console.log(stack);
    return stack.reduce((prev, curr) => prev + curr, 0);
};

// console.log(calculate(' 3 + 51 / 2 - 5/ 2 '));
console.log(calculate("3+2*2"));
