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
var swapPairs = function (head) {
    if (!head) {
        return head;
    }
    if (!head.next) {
        return head;
    }
    let before = new ListNode();
    before.next = head.next;

    let pre = new ListNode();
    pre.next = head;
    while (pre.next && pre.next.next) {
        let p1 = pre.next;
        let p2 = pre.next.next;
        let p3 = pre.next.next.next;
        p1.next = p3;
        p2.next = p1;
        pre.next = p2;
        pre = p1;
    }

    return before.next;
};
