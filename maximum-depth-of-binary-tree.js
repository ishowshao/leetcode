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
 * @return {number}
 */
var maxDepth = function (root) {
    let max = 0;
    let level = 0;
    const helper = (node) => {
        max = Math.max(max, level);
        if (!node) {
            return;
        }
        level++;
        helper(node.left);
        helper(node.right);
        level--;
    };
    helper(root);
    return max;
};