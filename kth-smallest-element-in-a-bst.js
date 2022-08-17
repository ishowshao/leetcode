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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    const helper = (root) => {
        if (!root) {
            return 0;
        }
        root.count = helper(root.left) + helper(root.right) + 1;
        return root.count;
    };
    helper(root);
    const kth = (root, k) => {
        if (!root) {
            return;
        }
        const total = root.count;
        if (root.left && root.left.count >= k) {
            return kth(root.left, k);
        }
        if (root.right && root.right.count > total - k) {
            return kth(root.right, k + root.right.count - total);
        }
        return root.val;
    };
    return kth(root, k);
};
