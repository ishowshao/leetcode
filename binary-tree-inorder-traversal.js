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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let result = [];

    const helper = (root) => {
        if (!root) {
            return;
        }
        helper(root.left);
        result.push(root.val);
        helper(root.right);
    };

    helper(root);

    return result;
};

const tree = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3
        },
        right: null
    }
};

console.log(inorderTraversal(tree));