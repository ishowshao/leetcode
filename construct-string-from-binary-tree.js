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
 * @return {string}
 */
var tree2str = function (root) {
    let ans = '';
    const helper = (root) => {
        if (!root) {
            return;
        }
        ans += root.val;
        if (root.left || (!root.left && root.right)) {
            ans += '(';
            helper(root.left);
            ans += ')';
        }
        if (root.right) {
            ans += '(';
            helper(root.right);
            ans += ')';
        }
    };
    helper(root);
    return ans;
};
const tree = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
        },
        right: null,
    },
};
console.log(tree2str(tree));