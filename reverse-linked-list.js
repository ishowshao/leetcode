/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    const nodes = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }
    nodes.reverse();
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].next = nodes[i + 1] || null;
    }
    return nodes[0] || null;
};
