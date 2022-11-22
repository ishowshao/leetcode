/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    // 1 1 2 1 2 1 1 3 3 3 3 3
    let left = 0;
    let right = 0;

    let map = new Map();
    map.set(fruits[0], 1);

    for (right = 1; right < fruits.length; right++) {
        const n = fruits[right];
        if (map.has(n)) {
            map.set(n, map.get(n) + 1);
        } else {
            map.set(n, 1);
        }
        if (map.size > 2) {
            const l = fruits[left];
            const c = map.get(l);
            if (c === 1) {
                map.delete(l);
            } else {
                map.set(l, c - 1);
            }
            left++;
        }
    }

    return right - left;
};

console.log(totalFruit([1, 2, 1]));
console.log(totalFruit([0, 1, 2, 2]));
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
