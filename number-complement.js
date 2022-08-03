/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let c = 0;
    let i = 0;
    while (num > 0) {
        let figure = num % 2;
        let add = figure === 0 ? 1 : 0;
        num = num >> 1;
        c = (add << i) + c;
        i++;
    }
    return c;
};

// console.log(findComplement(5));
console.log(findComplement(2));
