/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

    let pNode = null;
    let qNode = null;

    const travel = (root, parent) => {
        root.parent = parent;
        if (root.val === p) {
            pNode = root;
        }
        if (root.val === q) {
            qNode = root;
        }
        root.left && travel(root.left, root);
        root.right && travel(root.right, root);
    };

    travel(root, null);

    const ps = [];
    const qs = [];

    while (pNode) {
        ps.push(pNode);
        pNode = pNode.parent;
    }
    while (qNode) {
        qs.push(qNode);
        qNode = qNode.parent;
    }

    console.log(ps.map(i => i.val), qs.map(i => i.val));
    let n = root;
    while (ps.length > 0 && qs.length > 0) {
        p = ps.pop();
        q = qs.pop();
        
        if (p !== q) {
            break;
        } else {
            n = p;
        }
    }
    return n;
};

const tree = {
    val: 3,
    left: {
        val: 5,
        left: {
            val: 6
        },
        right: {
            val: 2,
            left: {
                val: 7
            },
            right: {
                val: 4
            }
        }
    },
    right: {
        val: 1,
        left: {
            val: 0
        },
        right: {
            val: 8
        }
    }
};

console.log(lowestCommonAncestor(tree, 5, 1));
console.log(lowestCommonAncestor(tree, 5, 4));