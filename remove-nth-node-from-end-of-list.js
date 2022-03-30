/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const nodes = [];
    nodes.push(head);
    while (head.next) {
        head = head.next;
        nodes.push(head);
    }
    const length = nodes.length;
    nodes[length - n];
    let prev = nodes[length - n - 1];
    let next = nodes[length - n + 1]
    if (prev && next) {
        prev.next = next;
    } else if (length === 1 && n === 1) {
        return null;
    } else if (length > 1 && n === 1) {
        prev.next = null;
    } else if (length > 1 && n === length) {
        return nodes[1];
    }
    return nodes[0];
};