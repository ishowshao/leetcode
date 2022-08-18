/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
    const inorder = [];
    const helper = (root) => {
        if (!root) {
            return;
        }
        helper(root.left);
        inorder.push(root);
        helper(root.right);
    };
    helper(root);
    const index = inorder.indexOf(p);
    return inorder[index + 1] ? inorder[index + 1] : null;
};
