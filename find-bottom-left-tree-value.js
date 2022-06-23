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
var findBottomLeftValue = function (root) {
    const levels = [];
    let l = 0;
    const helper = (root) => {
        if (!root) {
            return;
        }

        if (!levels[l]) {
            levels[l] = [];
        }
        levels[l].push(root.val);

        l++;
        helper(root.left);
        helper(root.right);
        l--;
    };
    helper(root);
    console.log(levels);
    return levels[levels.length - 1][0];
};

const tree = {
    val: 1,
    left: {
        val: 4,
        left: null,
        right: null,
    },
    right: {
        val: 2,
        left: {
            val: 3,
        },
        right: null,
    },
};

findBottomLeftValue(tree);
