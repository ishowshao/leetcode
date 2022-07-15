/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    const say = ['', '1', '11', '21', '1211', '111221'];
    for (let i = 6; i < 31; i++) {
        const toCount = say[i - 1];
        // const toCount = say[5];
        const result = [];
        let left = [1, toCount[0]];
        for (let i = 1; i < toCount.length; i++) {
            const c = toCount[i];
            if (c === left[1]) {
                left[0]++;
            } else {
                result.push(String(left[0]) + left[1]);
                left = [1, c];
                // break;
            }
        }
        result.push(String(left[0]) + left[1]);
        // console.log(result);
        say.push(result.join(''));
    }
    console.log(say);
};

console.log(countAndSay());