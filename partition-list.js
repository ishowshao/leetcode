/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    const a = new ListNode();
    const b = new ListNode();
    let pointerA = a;
    let pointerB = b;
    while (head) {
        if (head.val < x) {
            pointerA.next = head;
            pointerA = head;
        } else {
            pointerB.next = head;
            pointerB = head;
        }
        head = head.next;
    }
    pointerA.next = b.next;
    pointerB.next = null;
    return a.next;
};
