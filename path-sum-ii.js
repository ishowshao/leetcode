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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    const ans = [];
    const helper = (root, target, array) => {
        if (!root) {
            return;
        }
        const n = target - root.val;
        if (n === 0 && !root.left && !root.right) {
            array.push(root.val);
            ans.push([...array]);
            array.pop();
            return;
        }
        array.push(root.val);
        helper(root.left, n, array);
        helper(root.right, n, array);
        array.pop();
    };
    helper(root, targetSum, []);
    return ans;
};
