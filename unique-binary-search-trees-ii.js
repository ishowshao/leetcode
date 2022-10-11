/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    const helper = (start, end) => {
        if (start > end) {
            return [null];
        }
        const nodes = [];
        for (let i = start; i <= end; i++) {
            const rootVal = i;
            const leftNodes = helper(start, i - 1);
            const rightNodes = helper(i + 1, end);
            for (let l = 0; l < leftNodes.length; l++) {
                for (let r = 0; r < rightNodes.length; r++) {
                    const root = new TreeNode();
                    root.val = rootVal;
                    root.left = leftNodes[l];
                    root.right = rightNodes[r];
                    nodes.push(root);
                }
            }
        }
        return nodes;
    };
    return helper(1, n);
};

console.log(generateTrees(3));
