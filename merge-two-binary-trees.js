/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    const p1 = new TreeNode();
    const p2 = new TreeNode();
    p1.left = root1;
    p2.left = root2;
    const helper = (root1, root2, p1, p2, type = 1) => {
        if (!root1 && !root2) {
            return;
        }
        if (root1 && root2) {
            root1.val += root2.val;
        } else if (root1 && !root2) {
            root2 = new TreeNode(root1.val, null, null);
            p2[type === 1 ? 'left' : 'right'] = root2;
        } else if (!root1 && root2) {
            root1 = new TreeNode(root2.val, null, null);
            p1[type === 1 ? 'left' : 'right'] = root1;
        }
        helper(root1.left, root2.left, root1, root2, 1);
        helper(root1.right, root2.right, root1, root2, 2);
    }
    helper(root1, root2, p1, p2, 1);
    return p1.left;
};

