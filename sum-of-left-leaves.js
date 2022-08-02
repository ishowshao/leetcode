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
var sumOfLeftLeaves = function (root) {
    let sum = 0;
    const helper = (root, l) => {
        if (!root) {
            return;
        }
        if (l) {
            if (!root.left && !root.right) {
                sum += root.val;
            }
        }
        helper(root.left, 1);
        helper(root.right, 0);
    };
    helper(root, 0);
};
