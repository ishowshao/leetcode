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
    if (!head) {
        return head;
    }
    const h = head;
    let left = head;
    let right = head.next;

    while (right) {
        while (right && left.val === right.val) {
            right = right.next;
        }
        left.next = right;

        left = left.next;
        if (right) {
            right = right.next;
        }
    }

    return h;
};
