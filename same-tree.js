/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    const helper = (p, q) => {
        if (p && q) {
            return p.val === q.val && helper(p.left, q.left) && helper(p.right, q.right);
        } else if (p && !q) {
            return false;
        } else if (!p && q) {
            return false;
        } else if (p === null && q === null) {
            return true;
        }
    };
    return helper(p, q);
};
