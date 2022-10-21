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
    const prepare = (root, level) => {
        if (!root) {
            return;
        }
        if (!levels[level]) {
            levels[level] = [];
        }
        prepare(root.left, level + 1);
        prepare(root.right, level + 1);
    };
    prepare(root, 0);
    console.log(levels);
    const helper = (root, level) => {
        if (level >= levels.length) {
            return;
        }
        levels[level].push(root ? root.val : null);
        helper(root ? root.left : null, level + 1);
        helper(root ? root.right : null, level + 1);
    };
    helper(root, 0);
    console.log(levels);
    for (let i = 0; i < levels.length; i++) {
        const l = levels[i];
        while (l[0] === null) {
            l.shift();
        }
        while (l[l.length - 1] === null) {
            l.pop();
        }
    }
    console.log(levels);
    return Math.max(...levels.map(l => l.length));
};
