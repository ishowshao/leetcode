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
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) {
        return true;
    }
    const height = (root) => {
        if (!root) {
            return 0;
        }
        return Math.max(height(root.left), height(root.right)) + 1;
    };
    let is = true;
    const helper = (root) => {
        if (!root) {
            return;
        }
        if (is) {
            is = Math.abs(height(root.left) - height(root.right)) < 2;
            helper(root.left);
            helper(root.right);
        }
    };
    helper(root);
    return is;
};

const tree = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
        },
        right: null,
    },
};

console.log(isBalanced(tree));
