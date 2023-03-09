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
 * @return {number[]}
 */
var findMode = function (root) {
    const map = new Map();
    const helper = (root) => {
        if (!root) {
            return;
        }
        if (map.has(root.val)) {
            map.set(root.val, map.get(root.val) + 1);
        } else {
            map.set(root.val, 1);
        }
        helper(root.left);
        helper(root.right);
    }
    helper(root);
    const array = [];
    for (let kv of map) {
        array.push(kv);
    }
    array.sort((a, b) => b[1] - a[1]);
    const ans = [];
    ans.push(array[0][0]);
    for (let i = 1; i < array.length; i++) {
        if (array[i][1] === array[0][1]) {
            ans.push(array[i][0]);
        } else {
            break;
        }
    }
    return ans;
};
