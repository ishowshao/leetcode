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
var middleNode = function (head) {
    const nodes = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }

    return nodes[Math.floor(nodes.length / 2)];
};
