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

    let stack = [];

    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        let node = stack.pop();
        result.push(node.val);
        root = node.right;
    }

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