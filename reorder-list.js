/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    const nodes = [];
    let h = head;
    let pointer = head;
    while (head) {
        nodes.push(head);
        head = head.next;
        nodes[nodes.length - 1].next = null;
    }
    for (let i = 1; i < nodes.length; i++) {
        let node;
        if (i % 2 === 1) {
            node = nodes[nodes.length - 1 - (i >> 1)]
        } else {
            node = nodes[i >> 1];
        }
        pointer.next = node;
        pointer = pointer.next;
    }
    return h;
};
