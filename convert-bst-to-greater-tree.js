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
 * @return {TreeNode}
 */
var convertBST = function (root) {
    const vals = [];
    const helper = (root) => {
        if (!root) {
            return;
        }
        helper(root.left);
        vals.push(root.val);
        helper(root.right);
    };
    helper(root);

    for (let i = 1; i < vals.length; i++) {
        vals[vals.length - 1 - i] += vals[vals.length - i];
    }
    console.log(vals);
    let index = 0;
    const convert = (root) => {
        if (!root) {
            return;
        }
        convert(root.left);
        root.val = vals[index];
        index++;
        convert(root.right);
    };
    convert(root);
    return root;
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

console.log(convertBST(tree));
