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
var sumNumbers = function (root) {
    const ans = [];
    const helper = (root, array) => {
        if (!root) {
            return;
        }
        if (!root.left && !root.right) {
            array.push(root.val);
            ans.push([...array]);
            array.pop();
            return;
        }
        array.push(root.val);
        helper(root.left, array);
        helper(root.right, array);
        array.pop();
    };
    helper(root, []);
    return ans.map(array => Number(array.join(''))).reduce((prev, next) => prev + next, 0);
};

const tree = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null,
    },
    right: {
        val: 3,
        left: null,
        right: null,
    },
};

sumNumbers(tree);