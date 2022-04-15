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
var isValidBST = function (root) {
    const serial = inorderTraversal(root);
    let result = true;
    for (let i = 0; i < serial.length - 1; i++) {
        if (serial[i] >= serial[i + 1]) {
            result = false;
            break;
        }
    }
    return result;
};

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