/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
    const ans = [1];
    for (let i = 0; i < k; i++) {
        if (i % 2 === 0) {
            ans.push(k + 1 - Math.floor(i / 2));
        } else {
            ans.push(2 + Math.floor(i / 2));
        }
    }
    while (++k < n) {
        ans.push(k + 1);
    }
    return ans;
};
console.log(constructArray(5, 1));
