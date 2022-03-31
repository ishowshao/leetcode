const dfs = (root) => {
    const stack = [];
    stack.push(root);
    while (stack.length > 0) {
        let node = stack.pop();
        console.log(node.value);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
};

const dfs2 = (root) => {
    const trace = [];
    const helper = (root) => {
        console.log('(')
        trace.push(root.value);
        console.log(root.value);
        if (root.left) {
            helper(root.left);
        }
        if (root.right) {
            console.log(')')
            helper(root.right);
        }
        if (!root.left && !root.right) { // is leaf
            console.log(trace);
        }
        trace.pop();
    }
    helper(root);
};

const tree = {
    value: 0,
    left: {
        value: 1,
        left: {
            value: 3
        },
        right: {
            value: 4
        }
    },
    right: {
        value: 2,
        left: {
            value: 5
        },
        right: {
            value: 6
        }
    }
}

dfs2(tree);

const s = new Set();
s.add('111');
s.add('111');
console.log(s)