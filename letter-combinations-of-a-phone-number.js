/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function (digits) {
    digitsArr = digits.split('').filter(d => d !== '1');
    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    };
    const chars = [];
    digitsArr.forEach(digit => {
        chars.push(map[digit]);
    });
    if (chars.length === 0) {
        return [];
    } else if (chars.length === 1) {
        return chars[0].split('');
    }
    // console.log(chars);
    const first = chars[0].split('');
    let result = first;
    for (let i = 1; i < chars.length; i++) {
        result = cross(result, chars[i].split(''));
    }
    return result;
};

/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
var cross = function (arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push(arr1[i] + arr2[j]);
        }
    }
    return result;
};

console.log(letterCombinations('123334'));