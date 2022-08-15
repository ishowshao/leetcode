/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    if (prerequisites.length === 0) {
        return Array(numCourses).fill(0).map((v, i) => i);
    }
    const bMap = {};
    prerequisites.forEach((pre) => {
        const [a, b] = pre;
        if (bMap[b] === undefined) {
            bMap[b] = [a];
        } else {
            bMap[b].push(a);
        }
    });

    const bKeys = Object.keys(bMap);
    for (let i = 0; i < bKeys.length; i++) {
        const key = bKeys[i];
        let count = 0;
        const arr = [];
        arr.push(key);
        const courses = [];
        while (arr.length > 0) {
            const el = arr.shift();
            count++;
            courses.push(Number(el));
            if (bMap[el] !== undefined) {
                arr.push(...bMap[el]);
            }
            if (count >= numCourses) {
                return courses;
            }
        }
    }
    return [];
};

console.log(
    findOrder(4, [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
    ])
);
