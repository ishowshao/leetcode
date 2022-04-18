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
var isSymmetric = function (root) {
    let result = true;
    const helper = (node1, node2) => {
        if (!result) {
            return;
        }
        if (node1 === null || node2 === null) {
            result = node1 === node2;
            return;
        }
        if (node1.val !== node2.val) {
            result = false;
            return;
        }

        // console.log(node.val);
        helper(node1.left, node2.right);
        helper(node1.right, node2.left);
    };
    helper(root.left, root.right);
    return result;
};

const tree = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3
        },
        right: null
    }
};

console.log(isSymmetric(tree));