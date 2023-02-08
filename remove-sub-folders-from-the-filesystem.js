/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
    const tree = {};
    for (let i = 0; i < folder.length; i++) {
        let arr = folder[i].split('/');
        let treeNode = tree;
        for (let j = 1; j < arr.length; j++) {
            const p = arr[j];
            if (treeNode[p] === false) {
                break;
            }
            if (j === arr.length - 1) {
                treeNode[p] = false;
            } else {
                if (treeNode[p] === undefined) {
                    treeNode[p] = {};
                }
                treeNode = treeNode[p];
            }
        }
    }
    const ans = [];
    const helper = (root, path) => {
        for (let key in root) {
            if (root[key] !== false) {
                path.push(key);
                helper(root[key], path);
                path.pop();
            } else {
                path.push(key);
                ans.push('/' + path.join('/'));
                path.pop();
            }
        }
    };
    helper(tree, []);
    return ans;
};

console.log(removeSubfolders(['/a', '/a/b', '/c/d', '/c/d/e', '/c/f']));
