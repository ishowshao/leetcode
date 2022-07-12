/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    // undefined 未开始 1 搜索中 2 已完成
    const edges = {};
    for (let i = 0; i < prerequisites.length; i++) {
        const [m, n] = prerequisites[i];
        if (edges[n] === undefined) {
            edges[n] = [];
        }
        edges[n].push(m);
    }

    const status = {};
    let valid = true;
    const helper = (n) => {
        status[n] = 1;
        if (edges[n] !== undefined) {
            for (let i = 0; i < edges[n].length; i++) {
                const m = edges[n][i];
                if (status[m] === undefined) {
                    helper(m);
                    if (!valid) {
                        return;
                    }
                } else if (status[m] === 1) {
                    valid = false;
                    return;
                }
            }
        }

        status[n] = 2;
    };
    for (let i = 0; i < prerequisites.length && valid; i++) {
        const [, n] = prerequisites[i];
        if (status[n] === undefined) {
            helper(n);
        }
    }
    return valid;
};

console.log(canFinish(2, [[1, 0], [2, 0], [3, 0], [4, 1], [5, 1], [1, 6], [0, 7], [3, 7]]));
