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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    const isEqual = (a, b) => {
        if (!a && !b) {
            return true;
        }
        if (a && !b) {
            return false;
        }
        if (!a && b) {
            return false;
        }
        return a.val === b.val && isEqual(a.left, b.left) && isEqual(a.right, b.right);
    };
    const traverse = (root) => {
        if (!root) {
            return false;
        }
        if (isEqual(root, subRoot)) {
            return true;
        }
        return traverse(root.left) || traverse(root.right);
    };
    return traverse(root);
};
