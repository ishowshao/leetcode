/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    const helper = (nums) => {
        let root = null;
        if (nums.length === 0) {
            return root;
        }
        const mid = (nums.length - 1) >> 1;
        const num = nums[mid];
        root = new TreeNode(num);
        root.left = helper(nums.slice(0, mid));
        root.right = helper(nums.slice(mid + 1));
        return root;
    }
    return helper(nums);
};
