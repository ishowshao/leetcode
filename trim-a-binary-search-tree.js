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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
    const trim = (root) => {
        if (!root) {
            return root;
        }
        if (root.val >= low && root.val <= high) {
            root.left = trim(root.left);
            root.right = trim(root.right);
            return root;
        }
        if (root.val < low) {
            return trim(root.right);
        }
        if (root.val > high) {
            return trim(root.left);
        }
    };
    return trim(root);
};

const tree = {
    val: 3,
    left: {
        val: 0,
        left: null,
        right: {
            val: 2,
            left: {
                val: 1,
                left: null,
                right: null,
            },
            right: null,
        },
    },
    right: {
        val: 4,
        left: null,
        right: null,
    },
};

trimBST(tree, 1, 3);
