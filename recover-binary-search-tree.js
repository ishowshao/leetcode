/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    const nodes = [];
    const helper = (root) => {
        if (!root) {
            return;
        }
        helper(root.left);
        // nodes.push(root.val);
        nodes.push(root);
        helper(root.right);
    };
    helper(root);
    console.log(nodes);
    const sorted = [...nodes].sort((a, b) => a.val - b.val);
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i] !== sorted[i]) {
            const s = sorted[i].val;
            const n = nodes[i].val;
            nodes[i].val = s;
            sorted[i].val = n;
            break;
        }
    }
};

const tree = {
    val: 2,
    left: {
        val: 1,
        left: null,
        right: null,
    },
    right: {
        val: 5,
        left: {
            val: 4,
            left: null,
            right: null,
        },
        right: {
            val: 6,
            left: null,
            right: null,
        },
    },
};

console.log(recoverTree(tree));
