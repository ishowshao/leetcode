/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = new Set();
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            result = expand('');
        } else {
            let temp = new Set();
            result.forEach(item => {
                expand(item).forEach(str => {
                    temp.add(str);
                });
            });
            result = temp;
        }
    }
    return Array.from(result);
};

const expand = (s) => {
    const result = new Set();
    result.add(s + '()'); // 增加
    result.add('()' + s); // 增加
    result.add('(' + s + ')'); // 包裹
    // 内嵌
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            result.add(s.substring(0, i + 1) + '()' + s.substring(i + 1, s.length));
        }
    }
    return result;
};

// console.log(expand('()'));
console.log(generateParenthesis(1));