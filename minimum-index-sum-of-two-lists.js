/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    const map1 = {};
    list1.forEach((v, i) => map1[v] = i);
    let min = Number.POSITIVE_INFINITY;
    const p = {};
    list2.forEach((v, i) => {
        if (map1[v] !== undefined) {
            const sum = i + map1[v];
            min = Math.min(min, sum);
            if (p[sum] === undefined) {
                p[sum] = [v];
            } else {
                p[sum].push(v);
            }
        }
    });
    return p[min];
};
