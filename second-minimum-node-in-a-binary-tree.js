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
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
    if (!root.left) {
        return -1;
    }
    const values = new Set();
    const helper = (root) => {
        if (!root) {
            return;
        }
        values.add(root.val);
        helper(root.left);
        helper(root.right);
    };
    helper(root);
    if (values.size === 1) {
        return -1;
    }
    const nums = Array.from(values);
    nums.sort((a, b) => a - b);
    if (nums[0] === nums[1]) {
        return -1;
    }
    return nums[1];
};
