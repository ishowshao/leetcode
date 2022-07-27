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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const paths = [];
    let path = [];
    const helper = (root) => {
        if (!root) {
            return;
        }
        path.push(root.val);
        if (!root.left && !root.right) {
            // log path
            paths.push([...path]);
        } else {
            helper(root.left);
            helper(root.right);
        }
        path.pop();
    };
    helper(root);
    return paths.map(path => path.join('->'));
};
