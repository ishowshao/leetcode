/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i);
    }
    console.log(map);
    const dp = Array(arr.length).fill(0);
    dp[0] = 0;
    dp[1] = 0;
    for (let i = 2; i < dp.length; i++) {
        let max = 0;
        for (let j = i - 1; j >= 1; j--) {
            let last = i;
            let prev = j;
            let count = 0;
            while (true) {
                let num = arr[last] - arr[prev];
                if (map.has(num) && map.get(num) < prev) {
                    last = prev;
                    prev = map.get(num);
                    count++;
                } else {
                    break;
                }
            }
            max = Math.max(max, count);
        }
        dp[i] = max;
    }
    console.log(dp);
    max = Math.max(...dp);
    return max === 0 ? 0 : max + 2;
};

// console.log(lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18, 25]));
console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]));
