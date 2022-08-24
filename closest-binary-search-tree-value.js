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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
    let min = Number.POSITIVE_INFINITY;
    let minVal = null;
    const helper = (root) => {
        if (!root) {
            return;
        }
        if (Math.abs(root.val - target) < min) {
            min = Math.abs(root.val - target);
            minVal = root.val;
        }
        if (root.val > target) {
            helper(root.left);
        } else {
            helper(root.right);
        }
    };
    helper(root);
    return minVal;
};
