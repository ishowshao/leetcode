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
var minDepth = function (root) {
    const height = (root) => {
        if (!root) {
            return 0;
        }
        if (!root.left && !root.right) {
            return 1;
        }
        if (!root.left) {
            return height(root.right) + 1;
        }
        if (!root.right) {
            return height(root.left) + 1;
        }
        return Math.min(height(root.left), height(root.right)) + 1;
    };
    return height(root);
};
