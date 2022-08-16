/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    // 构造边
    const bMap = {};
    prerequisites.forEach((pre) => {
        const [a, b] = pre;
        if (bMap[b] === undefined) {
            bMap[b] = [a];
        } else {
            bMap[b].push(a);
        }
    });

    let cycle = false;
    const stack = [];
    const visited = Array(numCourses).fill(0); // 0, 1, 2
    const dfs = (n) => {
        visited[n] = 1;
        const edges = bMap[n];
        if (edges) {
            for (let i = 0; i < edges.length; i++) {
                const v = edges[i];
                if (visited[v] === 1) {
                    cycle = true;
                    return;
                }
                if (visited[v] === 2) {
                    continue;
                }
                dfs(v);
            }
        }
        visited[n] = 2;
        stack.push(n);
    };
    for (let i = 0; i < numCourses && !cycle; i++) {
        if (visited[i] === 0) {
            dfs(i);
        }
    }
    if (cycle) {
        return [];
    }
    return stack.reverse();
};

console.log(
    findOrder(4, [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
    ])
);
