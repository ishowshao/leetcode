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
var flatten = function (root) {
    const nodes = [];
    const helper = (node) => {
        if (node) {
            nodes.push(node);
        } else {
            return;
        }
        helper(node.left);
        helper(node.right);
    };
    helper(root);
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.left = null;
        node.right = nodes[i + 1] || null;
    }
};