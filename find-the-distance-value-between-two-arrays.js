/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
    let ans = 0;
    for (let i = 0; i < arr1.length; i++) {
        const num1 = arr1[i];
        let is = true;
        for (let j = 0; j < arr2.length; j++) {
            const num2 = arr2[j];
            if (Math.abs(num1 - num2) <= d) {
                is = false;
                break;
            }
        }
        if (is) {
            ans++;
        }
    }
    return ans;
};
