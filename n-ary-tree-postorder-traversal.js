/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
    const nums = [];
    const helper = (root) => {
        if (!root) {
            return;
        }
        root.children.forEach(helper);
        nums.push(root.val);
    };
    helper(root);
    return nums;
};
