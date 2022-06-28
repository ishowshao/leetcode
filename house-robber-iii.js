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
var rob = function (root) {
    // 计算一个节点包含自己或者不包含自己时能偷的最大值
    const cacheTrue = new Map();
    const cacheFalse = new Map();

    const helper = (root, include = true) => {
        if (!root) {
            return 0;
        }

        if (!include) {
            if (cacheFalse.has(root)) {
                return cacheFalse.get(root);
            }
            const max = helper(root.left, true) + helper(root.right, true);
            cacheFalse.set(root, max);
            return max;
        }

        if (cacheTrue.has(root)) {
            return cacheTrue.get(root);
        }
        const max = Math.max(
            root.val + helper(root.left, false) + helper(root.right, false),
            helper(root.left, true) + helper(root.right, true)
        );
        cacheTrue.set(root, max);
        return max;
    };
    return helper(root, true);
};

const tree = {
    val: 3,
    left: {
        val: 4,
        left: {
            val: 1,
            left: null,
            right: null,
        },
        right: {
            val: 3,
            left: null,
            right: null,
        },
    },
    right: {
        val: 5,
        left: null,
        right: {
            val: 1,
            left: null,
            right: null,
        },
    },
};

console.log(rob(tree));