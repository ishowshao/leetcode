// 这个方法会超时...
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let total = 0;
    let levelArr = [];
    let levelCount = 0;
    let has = -1;
    do {
        for (let i = 0; i < height.length; i++) {
            let h = height[i];
            if (h === 0) {
                levelArr.push(0);
            } else {
                levelArr.push(1);
                height[i] -= 1;
            }
        }
        console.log(levelArr);
        [levelCount, has] = count(levelArr);
        total += levelCount;
        // console.log(height);
        levelArr = [];
    } while (has > 0)
    return total;
};

/**
 * @param {Array} arr 
 */
const count = (arr) => {
    let start = arr.indexOf(1);
    let end = arr.lastIndexOf(1);
    let zeroCount = 0;
    let oneCount = 0;
    for (let i = start; i < end; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        } else {
            oneCount++;
        }
    }

    return [zeroCount, oneCount];
};

console.log(trap([4, 2, 3]));