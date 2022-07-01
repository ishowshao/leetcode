/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
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

    const equationsSize = equations.length;

    const unionFind = new UnionFind(equationsSize * 2);
    const hashMap = {};

    let id = 0;
    for (let i = 0; i < equationsSize; i++) {
        const equation = equations[i];
        const [var1, var2] = equation;
        if (hashMap[var1] === undefined) {
            hashMap[var1] = id;
            id++;
        }
        if (hashMap[var2] === undefined) {
            hashMap[var2] = id;
            id++;
        }
        unionFind.union(hashMap[var1], hashMap[var2], values[i]);
    }
    // return result;
    const result = [];
    for (let i = 0; i < queries.length; i++) {
        let var1 = queries[i][0];
        let var2 = queries[i][1];

        let id1 = hashMap[var1];
        let id2 = hashMap[var2];

        if (id1 == null || id2 == null) {
            result[i] = -1;
        } else {
            result[i] = unionFind.isConnected(id1, id2);
        }
    }
    return result;
};

class UnionFind {
    constructor(n) {
        this.parent = Array(n);
        this.weight = Array(n);
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.weight[i] = 1;
        }
    }

    union(x, y, value) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX == rootY) {
            return;
        }

        this.parent[rootX] = rootY;
        // 关系式的推导请见「参考代码」下方的示意图
        this.weight[rootX] = (this.weight[y] * value) / this.weight[x];
    }

    find(x) {
        if (x != this.parent[x]) {
            let origin = this.parent[x];
            this.parent[x] = this.find(this.parent[x]);
            this.weight[x] *= this.weight[origin];
        }
        return this.parent[x];
    }

    isConnected(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX == rootY) {
            return this.weight[x] / this.weight[y];
        } else {
            return -1;
        }
    }
}

console.log(
    calcEquation(
        [
            ['a', 'd'],
            ['a', 'b'],
            ['d', 'c'],
            ['e', 'f']
        ],
        [3.0, 4.0, 6.0, 2.0],
        [
            ['a', 'c'],
        ]
    )
);
