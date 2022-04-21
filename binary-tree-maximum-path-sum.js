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
var maxPathSum = function (root) {
    let max1 = Number.NEGATIVE_INFINITY;
    let max2 = Number.NEGATIVE_INFINITY;
    const helper = (node) => {
        if (!node) {
            return Number.NEGATIVE_INFINITY;
        }
        let sum = node.val;
        let l = helper(node.left);
        let r = helper(node.right);
        let max = Math.max(sum, sum + l, sum + r);
        max1 = Math.max(max1, max);
        max2 = Math.max(max2, sum + l + r, l, r);
        return max;
    };
    helper(root);
    return Math.max(max1, max2);
};

const tree = {
    val: -10,
    left: {
        val: 9,
        left: null,
        right: null,
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        }
    }
};

console.log(maxPathSum(tree));