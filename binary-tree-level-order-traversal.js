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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const result = [];
    let level = 0;
    const helper = (node) => {
        if (!node) {
            return;
        }
        if (!result[level]) {
            result[level] = [];
        }
        result[level].push(node.val);
        level++;
        helper(node.left);
        helper(node.right);
        level--;
    };
    helper(root);
    return result;
};

const tree = {
    val: 1,
    left: {
        val: 4,
    },
    right: {
        val: 2,
        left: {
            val: 3
        },
        right: null
    }
};

console.log(levelOrder(tree));