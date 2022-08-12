/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    if (nums.every(el => el === 0)) {
        return '0';
    }
    nums.sort((a, b) => {
        const ab = String(a) + String(b);
        const ba = String(b) + String(a);
        let i = 0;
        for (i = 0; i < ab.length; i++) {
            if (ab[i] !== ba[i]) {
                break;
            }
        }
        return ba[i] - ab[i];
    });
    return nums.join('');
};

console.log(largestNumber([30, 3, 34, 5, 9]));
