/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const counts = [];
    for (let i = 0; i <= n; i++) {
        let c = 0;
        let num = i;
        while (num) {
            if (num % 2 === 1) {
                c++;
            }
            num = num >> 1;
        }
        counts.push(c);
    }
    return counts;
};

const count = (num) => {
    let c = 0;
    while (num) {
        if (num % 2 === 1) {
            c++;
        }
        num = num >> 1;
    }
    return c;
};

console.log(countBits(5));
