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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    const map = new Map();
    let count = 0;
    const helper = (root, targets) => {
        if (targets.includes(root.val)) {
            count++;
            // console.log(root);
        }
        // if (!root.left && !root.right) {
        //     return targets.filter(el => el === 0).length;
        // }
        // if (map.has(root)) {
        //     const cache = map.get(root);
        //     if (cache.has(target)) {
        //         return cache.get(target);
        //     }
        // }

        // let count = 0;
        // for (let i = 0; i < targets.length; i++) {
        //     const target = targets[i];
        //     if (root.val === target) {
        //         count++;
        //     }
        //     count += helper(root.left, [...targets, target - root.val]);
        //     count += helper(root.right, [...targets, target - root.val]);
        // }
        if (root.left) {
            helper(root.left, [targets[0], ...targets.map((el) => el - root.val)]);
        }
        if (root.right) {
            helper(root.right, [targets[0], ...targets.map((el) => el - root.val)]);
        }
        // return count;
    };
    // return helper(root, [targetSum]);
    helper(root, [targetSum]);
    console.log(count);
};

// const tree = {
//     val: 10,
//     left: {
//         val: 5,
//         left: {
//             val: 3,
//             left: {
//                 val: 3,
//                 left: null,
//                 right: null,
//             },
//             right: {
//                 val: -2,
//                 left: null,
//                 right: null,
//             },
//         },
//         right: {
//             val: 2,
//             left: null,
//             right: {
//                 val: 1,
//                 left: null,
//                 right: null,
//             },
//         },
//     },
//     right: {
//         val: -3,
//         left: null,
//         right: {
//             val: 11,
//             left: null,
//             right: null,
//         },
//     },
// };

const tree = {
    val: 0,
    left: {
        val: 1,
        left: null,
        right: null,
    },
    right: {
        val: 1,
        left: null,
        right: null,
    },
}

console.log(pathSum(tree, 1));
