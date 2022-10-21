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
 var widthOfBinaryTree = function (root) {
    const levels = [];
    const helper = (root, level, index) => {
        if (!root) {
            return;
        }
        if (!levels[level]) {
            levels[level] = [];
        }
        levels[level].push(index);
        helper(root.left, level + 1, index * 2n);
        helper(root.right, level + 1, index * 2n + 1n);
    };
    helper(root, 0, 0n);
    console.log(levels);
    let max = 0;
    for (let i = 0; i < levels.length; i++) {
        const l = levels[i];
        let w;
        if (l.length > 1) {
            w = Math.max(max, Number(l[l.length - 1] - l[0] + 1n));
        } else {
            w = 1;
        }
        if (w > max) {
            max = w;
        }
    }
    return Number(max);
    // return Math.max(...levels.map(l => l.length > 1 ? l[l.length - 1] - l[0] + 1 : 1));
};
