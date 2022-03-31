/**
 * @param {string} s
 * @return {number}
 */
// var longestValidParentheses = function (s) {
//     let max = 0;
//     let count = 0;
//     const stack = [];
//     for (let i = 0; i < s.length; i++) {
//         let char = s[i];
//         if (char === '(') {
//             stack.push(char);
//         } else if (char === ')') {
//             if (stack[stack.length - 1] === '(') {
//                 stack.pop();
//                 count++;
//             } else {
//                 console.log(count);
//                 if (count > max) {
//                     max = count;
//                     count = 0;
//                 }
//                 // return stack.length;
//             }
//         }
//     }
//     if (count > max) {
//         max = count;
//     }
//     // console.log(max);
//     return max * 2;
// };

// 这是个很鸡贼的办法，效率一般，但是还可以优化一下
var longestValidParentheses = function (s) {
    let arr = s.split('');
    while (replace(arr) > 0) {
    }
    let str = arr.join('').replace(/[()]/g, '|');
    return Math.max(...str.split('|').map(i => i.length));
}

const replace = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '(') {
            continue;
        }
        let j;
        let match = false;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] === '.') {
                continue;
            }
            if (arr[j] === ')') {
                match = true;
                arr[i] = '.';
                arr[j] = '.';
                count++;
                i = j + 1;
            }
            break;
        }
    }
    return count;
};

console.log(longestValidParentheses('(()(()(()(()'));