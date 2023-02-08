/**
 * @param {string} a 
 * @param {string} b 
 */
const test1 = (a, b) => {
    for (let i = 0, len = a.length; i < len; i++) {
        if (a[i] === b) {
            return i;
        }
    }
    return -1;
};

/**
 * @param {string} a 
 * @param {string} b 
 */
const test2 = (a, b) => {
    return a.indexOf(b);
};

console.time('1');
for (let i = 0; i < 1000000; i++) {
    test1('' + Math.random() + 'aaaaaaaaaaabbbbbbbbbbaaaaaaaaaabbbbbbbbbbaaaaaaaaaabbbbbbbbbbaaaaaaaaaaabbbbbbbbbbaaaaaaaaaabbbbbbbbbbaaaaaaaaaabbbbbbbbbbaaaaaaaaaaabbbbbbbbbbaaaaaaaaaabbbbbbbbbbaaaaaaaaaabbbbbbbbbbc', 'c');
}
console.timeEnd('1');
console.time('2');
for (let i = 0; i < 1000000; i++) {
    test2('' + Math.random() + 'aaaaaaaaaaabbbbbbbbbbaaaaaaaaaabbbbbbbbbbaaaaaaaaaabbbbbbbbbbaaaaaaaaaaabbbbbbbbbbaaaaaaaaaabbbbbbbbbbaaaaaaaaaabbbbbbbbbbaaaaaaaaaaabbbbbbbbbbaaaaaaaaaabbbbbbbbbbaaaaaaaaaabbbbbbbbbbc', 'c');
}
console.timeEnd('2');
console.time('3');
for (let i = 0; i < 1000000; i++) {
    '' + Math.random();
}
console.timeEnd('3');