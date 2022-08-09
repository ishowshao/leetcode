/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    /**
     * @param {string} s
     */
    const helper = (s) => {
        const res = [];
        if (s === '') {
            return [[]];
        }
        if (s.length === 1) {
            return [[s]];
        }
        for (let i = 1; i <= s.length; i++) {
            const base = s.substring(0, i);
            if (isPalindrome(base)) {
                const rest = helper(s.substring(i));
                rest.forEach((element) => {
                    element.unshift(base);
                    res.push(element);
                });
            }
        }
        return res;
    };
    return helper(s);
};

const isPalindrome = (s) => {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            return false;
        }
    }
    return true;
};

// console.log(partition('aab'));
// console.log(partition('aabcb'));
console.log(partition('cbbbcc'));
