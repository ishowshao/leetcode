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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    const levels = [];
    const helper = (root, level) => {
        if (!root) {
            return;
        }
        if (levels[level] === undefined) {
            levels[level] = [root.val];
        } else {
            levels[level].push(root.val);
        }
        helper(root.left, level + 1);
        helper(root.right, level + 1);
    };
    helper(root, 0);
    for (let i = 0; i < levels.length; i++) {
        if (i % 2 !== 0) {
            levels[i] = levels[i].reverse();
        }
    }
    return levels;
};
