/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    const sentry = new ListNode();
    sentry.next = head;
    head = sentry;

    let index = 0;
    let a = null;
    let b = null;
    let c = null;
    let d = null;
    while (head) {
        if (index === left - 1) {
            a = head;
        }
        if (index === left) {
            b = head;
        }
        if (index === right) {
            c = head;
            d = c.next;
            c.next = null;
        }
        head = head.next;
        index++;
    }

    let tmp = null;
    while (b) {
        tmp = b;
        b = b.next;
        tmp.next = d;
        d = tmp;
    }
    a.next = d;
    return sentry.next;
};
