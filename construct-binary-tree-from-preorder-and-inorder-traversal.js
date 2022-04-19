/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 这种题思路还是尽量往递归，区间分治来靠
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const map = {};
    for (let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i;
    }

    const build = (prel, prer, inl, inr) => {
        const val = preorder[prel];
        const node = { val: val, left: null, right: null };
        const valIndex = map[val];
        const leftCount = valIndex - inl;
        const rightCount = inr - valIndex;
        if (leftCount > 0) {
            node.left = build(prel + 1, prel + leftCount, inl, valIndex - 1);
        }
        if (rightCount > 0) {
            node.right = build(prel + 1 + leftCount, prer, valIndex + 1, inr);
        }
        return node;
    };

    return build(0, preorder.length - 1, 0, inorder.length - 1);
};

console.log(JSON.stringify(buildTree([1, 2], [1, 2]), null, '  '));
console.log(JSON.stringify(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]), null, '  '));