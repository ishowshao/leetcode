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
var deleteDuplicates = function (head) {
    const map = {};
    const sentry = new ListNode();
    sentry.next = head;
    while (head) {
        if (map[head.val] === undefined) {
            map[head.val] = 1;
        } else {
            map[head.val]++;
        }
        head = head.next;
    }
    head = sentry.next;
    prev = sentry;
    while (head) {
        if (map[head.val] !== 1) {
            prev.next = head.next;
        } else {
            prev = prev.next;
        }
        head = head.next;
    }
    return sentry.next;
};
