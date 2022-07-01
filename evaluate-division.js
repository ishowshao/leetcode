/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    // 需要构建一个这样的结构
    // const map = {
    //     a: {
    //         root: 'c',
    //         weight: 12,
    //     },
    //     b: {
    //         root: 'c',
    //         weight: 6,
    //     },
    //     c: {
    //         root: 'c',
    //         weight: 1,
    //     },
    //     ab: {
    //         root: 'ab',
    //         weight: 1,
    //     },
    // };
    // a - b - c
    //     2   3
    // 找到root，更新root和weight
    const find = (node) => {
        let root = node.root;
        let weight = node.weight;
        while (root !== map[root].root) {
            weight *= map[root].weight;
            root = map[root].root;
        }
        node.root = root;
        node.weight = weight;
        return node;
    };

    const map = {};
    // 初始化
    for (let i = 0; i < equations.length; i++) {
        const equation = equations[i];
        const [s1, s2] = equation;
        map[s1] = { root: s2, weight: values[i] };
        if (map[s2] === undefined) {
            map[s2] = { root: s2, weight: 1 };
        }
    }

    for (let i = 0; i < equations.length; i++) {
        const equation = equations[i];
        const [s1, s2] = equation;
        const root1 = find(map[s1]);
        // console.log('s1', s1, root1);

        const root2 = find(map[s2]);
        // console.log('s2', s2, root2);

        // 这个地方如何理解：
        // 按照循环找root找出来的root，竟然跟声明告诉的不一致
        // 那么找出来的root1一定能连到声明告诉的root2
        if (root1.root !== root2.root) {
            map[root1.root].root = root2.root;
            map[root1.root].weight = (root2.weight * values[i]) / root1.weight;
        }
    }
    console.log(map);

    const result = [];
    for (let i = 0; i < queries.length; i++) {
        const [s1, s2] = queries[i];
        if (map[s1] === undefined || map[s2] === undefined) {
            result.push(-1);
        } else {
            const r1 = find(map[s1]);
            const r2 = find(map[s2]);
            if (r1.root === r2.root) {
                result.push(r1.weight / r2.weight);
            } else {
                result.push(-1);
            }
        }
    }
    return result;
};

console.log(
    calcEquation(
        [
            ['a', 'b'],
            ['c', 'd'],
        ],
        [3.4, 1.4, 2.3],
        [['a', 'c']]
    )
);
