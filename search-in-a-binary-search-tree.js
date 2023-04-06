/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * You are given the root of a binary search tree (BST) and an integer val.
 * Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (root === null) {
        // If the root is null, the tree is empty, so return null
        return null;
    }
    if (root.val === val) {
        // If the root's value is equal to the target value, return the root as the subtree
        return root;
    }
    if (val < root.val) {
        // If the target value is less than the root's value, search in the left subtree
        return searchBST(root.left, val);
    } else {
        // If the target value is greater than the root's value, search in the right subtree
        return searchBST(root.right, val);
    }
};