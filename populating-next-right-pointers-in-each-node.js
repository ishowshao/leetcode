/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    const levels = [];
    const helper = (root, level) => {
        if (!root) {
            return;
        }
        if (levels[level] === undefined) {
            levels[level] = [root];
        } else {
            levels[level].push(root);
        }
        helper(root.left, level + 1);
        helper(root.right, level + 1);
    };
    helper(root, 0);
    for (let i = 0; i < levels.length; i++) {
        const l = levels[i];
        for (let j = 0; j < l.length - 1; j++) {
            l[j].next = l[j + 1];
        }
    }
    return root;
};
