/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const pathArr = path.split('/').filter(p => p !== '.' && p !== '');
    let newArr = [];
    for (let i = 0; i < pathArr.length; i++) {
        const part = pathArr[i];
        if (part === '..') {
            newArr.pop();
        } else {
            newArr.push(part);
        }
    }
    // console.log(newArr, newArr.join('/'));
    return '/' + newArr.join('/');
};

// console.log(simplifyPath('/a/./b/../../c/'));
// console.log(simplifyPath('/../'));
// console.log(simplifyPath('/home//foo/'));
console.log(simplifyPath('/a//b////c/d//././/..'));
