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
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function (root, arr) {
    const helper = (root, arr) => {
        if (!root && arr.length === 0) {
            return true;
        }
        if (!root || arr.length === 0) {
            return false;
        }
        if (root.val !== arr[0]) {
            return false;
        }
        if (!root.left && !root.right && arr.length === 1) {
            return root.val === arr[0];
        } else {
            const el = arr.shift();
            let lres = root.left ? helper(root.left, arr) : false;
            let rres = root.right ? helper(root.right, arr) : false;
            arr.unshift(el);
            return lres || rres;
        }
    };
    return helper(root, arr);
};

// const tree = {
//     val: 0,
//     left: {
//         val: 1,
//         left: {
//             val: 0,
//             right: {
//                 val: 1,
//             },
//         },
//         right: {
//             val: 1,
//             left: {
//                 val: 0,
//             },
//             right: {
//                 val: 0,
//             },
//         },
//     },
//     right: {
//         val: 0,
//         left: {
//             val: 0,
//         },
//         right: null,
//     },
// };

const tree = {
    val: 2,
    left: {
        val: 9,
        left: null,
        right: {
            val: 1,
            left: null,
            right: {
                val: 8
            }
        },
    },
    right: {
        val: 3,
        left: null,
        right: {
            val: 2,

        },
    },
};

console.log(isValidSequence(tree, [2, 9, 1, 8, 0]));