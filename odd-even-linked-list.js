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
var oddEvenList = function (head) {
    if (!head) {
        return head;
    }
    const evenHead = head.next;
    let e = head.next;
    let o = head;
    while (o.next && e.next) {
        o.next = o.next.next;
        o = o.next;
        e.next = o.next;
        e = e.next;
    }
    o.next = evenHead;
    return head;
};
