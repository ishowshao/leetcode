/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
    if (k === 1) {
        const ans = Array(n).fill(0);
        ans.forEach((v, i) => (ans[i] = i + 1));
        return ans;
    } else {
        const ans = [];
        const array = Array(n).fill(0);
        array.forEach((v, i) => (array[i] = i + 1));
        array[0] = 0;
        array[k] = 0;

        ans[0] = 1;
        ans[1] = k + 1;
        k--;
        while (k > 0) {
            console.log(k);
            let num = ans[ans.length - 1];
            let test = num - k;
            if (test > 0 && !ans.includes(test)) {
                ans.push(test);
            } else {
                ans.push(num + k);
            }
            array[ans[ans.length - 1] - 1] = 0;
            k--;
        }
        array.forEach((v) => {
            if (v !== 0) {
                ans.push(v);
            }
        });
        return ans;
    }
};
console.log(constructArray(10, 9));
