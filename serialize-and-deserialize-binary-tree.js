// 替代法
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    const nodes = [];
    const helper = (root) => {
        if (!root) {
            nodes.push(null);
            return;
        }
        nodes.push(root.val);
        helper(root.left);
        helper(root.right);
    };
    helper(root);
    console.log(nodes);
    return JSON.stringify(nodes);
};

const tree = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: null,
    },
};

// serialize(tree);


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    const nodes = JSON.parse(data);
    const helper = (nodes) => {
        if (nodes[0] === null) {
            nodes.shift();
            return null;
        }
        const node = {
            val: nodes[0],
        }
        nodes.shift();
        node.left = helper(nodes);
        node.right = helper(nodes);
        return node;
    };
    const root = helper(nodes);
    console.log(root);
};

deserialize(serialize(tree));

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
