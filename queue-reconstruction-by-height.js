/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    people.sort((a, b) => b[0] - a[0]);
    const queue = people.filter((el) => el[1] === 0).sort((a, b) => a[0] - b[0]);
    console.log(queue);
    for (let i = 1; i < people.length; i++) {
        // 这个位置可以优化，不用每次filter，排个序
        const add = people.filter((el) => el[1] === i);
        // console.log(add);
        for (let j = 0; j < add.length; j++) {
            const height = add[j][0];
            let count = 0;
            for (let k = 0; k < queue.length; k++) {
                if (height <= queue[k][0]) {
                    count++;
                    if (count >= i) {
                        queue.splice(k + 1, 0, add[j]);
                        break;
                    }
                }
            }
            console.log(queue);
        }
    }
    return queue;
};

console.log(
    reconstructQueue([
        [2, 4],
        [3, 4],
        [9, 0],
        [0, 6],
        [7, 1],
        [6, 0],
        [7, 3],
        [2, 5],
        [1, 1],
        [8, 0],
    ])
);
