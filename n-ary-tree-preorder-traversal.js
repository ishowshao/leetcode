/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    const nums = [];
    const helper = (root) => {
        if (!root) {
            return;
        }
        nums.push(root.val);
        root.children.forEach(helper);
    };
    helper(root);
    return nums;
};
