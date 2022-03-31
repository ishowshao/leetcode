/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const nodes = [];
    lists.forEach(list => {
        nodes.push(...toArray(list));
    });
    nodes.sort((a, b) => a.val - b.val);
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    return nodes[0] || null;
};
const toArray = (list) => {
    const nodes = [];
    if (list) {
        nodes.push(list);
        while (list.next) {
            list = list.next;
            nodes.push(list);
        }
    }
    return nodes;
};
