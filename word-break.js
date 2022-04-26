/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let result = false;
    let slen = s.length;
    let r = 0;
    const helper = (position) => {
        r++;
        if (result) {
            return;
        }
        if (position === slen) {
            result = true;
            return;
        }
        for (let i = 0; i < wordDict.length; i++) {
            if (match(s, position, wordDict[i])) {
                let length = wordDict[i].length
                position += length;
                helper(position);
                position -= length;
            }
        }
    };
    helper(0);
    console.log(r);
    return result;
};

const match = (s, position, word) => {
    let match = true;
    for (let i = 0; i < word.length; i++) {
        if (s[i + position] !== word[i]) {
            match = false;
            break;
        }
    }
    return match;
};

// 这个方法会超时，最主要的问题是 最后一个用例，其实wordDict里面 a aa aaa ...都可以简化为a，就不会超时

console.log(wordBreak('leetcode', ["leet", "code"]));
console.log(wordBreak('applepenapple', ["apple", "pen"]));
console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]));
console.log(wordBreak('aaaaaaaaaaaaab', ['aa', 'a']));
// console.log(wordBreak('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab', ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]));
