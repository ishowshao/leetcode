/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let hash = getHash(str);
        if (map[hash] === undefined) {
            map[hash] = [str];
        } else {
            map[hash].push(str);
        }
    }
    Object.values(map);
};

// 这里用排序效率比较差
// 乘法满足交换律，所以用乘法计算hash，是比较合适的
// 就是如何乘能保证不同的字符结果也不同？
const getHash = (str) => {
    return str.split('').sort().join();
};