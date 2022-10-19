/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
    pairs.sort((a, b) => a[1] - b[1]);
    console.log(pairs);
    // pairs.sort((a, b) => a[0] - b[0]);
    // console.log(pairs);

    let ans = 1;
    let j = 0;
    for (let i = 1; i < pairs.length; i++) {
        if (pairs[i][0] > pairs[j][1]) {
            ans++;
            j = i;
        } else {
            continue;
        }
    }
    return ans;
};

console.log(
    findLongestChain([
        [-6, 9],
        [1, 6],
        [8, 10],
        [-1, 4],
        [-6, -2],
        [-9, 8],
        [-5, 3],
        [0, 3],
    ])
);
