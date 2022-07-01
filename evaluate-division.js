/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    const path = [...equations];
    const eq = new Set();
    equations.forEach((el, index) => {
        eq.add(el[0]);
        eq.add(el[1]);
        path.push([el[1], el[0]]);
        values.push(1 / values[index]);
    });

    // console.log(path, values);
    // return;


    // for (let i = 0; i < equations.length; i++) {
    //     const e = equations[i];
    //     const value = values[i];
    //     graph[e[0]] = { next: e[1], val: value, visited: 0 };
    //     graph[e[1]] = { next: e[0], val: 1 / value, visited: 0 };
    // }

    // console.log(graph)

    const result = [];

    const dfs = (node, head, tail, product) => {
        if (node === tail) {
            return product;
        }
        let result = -1;
        for (let i = 0; i < path.length; i++) {
            const p = path[i];
            if (p[0] === node && p[1] !== head) {
                result = dfs(p[1], head, tail, product * values[i]);
            }
        }
        return result;
    }

    const query = queries[2];
    const p = dfs(query[0], query[0], query[1], 1);
    console.log(p);

    return result;
};

console.log(
    calcEquation(
        [
            ['a', 'b'],
            ['b', 'c'],
        ],
        [2.0, 3.0],
        [
            ['a', 'c'],
            ['b', 'a'],
            ['a', 'e'],
            ['a', 'a'],
            ['x', 'x'],
        ]
    )
);
