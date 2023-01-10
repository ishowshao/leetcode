/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function (n) {
    let array = Array(n).fill(0);
    array.forEach((v, index) => array[index] = index);
    console.log(array);
    let ans = 0;
    while (true) {
        let newArray = [...array];
        newArray.forEach((v, i) => {
            if (i % 2 === 0) {
                newArray[i] = array[i / 2];
            } else {
                newArray[i] = array[n / 2 + (i - 1) / 2];
            }
        });
        array = newArray;
        ans++;
        let success = true;
        for (let i = 0; i < array.length; i++) {
            if (array[i] !== i) {
                success = false;
                break;
            }
        }
        if (success) {
            return ans;
        }
    }
};

console.log(reinitializePermutation(6));
