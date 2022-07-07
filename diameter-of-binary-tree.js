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
var diameterOfBinaryTree = function (root) {
    let max = 0;
    const h = (root) => {
        if (!root) {
            return 0;
        }
        let l = h(root.left);
        let r = h(root.right);
        console.log(root, l, r);
        max = Math.max(max, l + r + 1);
        return Math.max(l, r) + 1;
    };
    h(root);
    console.log(max);
};

const tree = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
            left: {
                val: 4,
                left: null,
                right: null,
            },
            right: null,
        },
        right: null
    }
};

console.log(diameterOfBinaryTree(tree));
