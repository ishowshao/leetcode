/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    let pointer = head;
    let length = 0;
    let tail = null;
    while (pointer) {
        tail = pointer;
        pointer = pointer.next;
        length++;
    }
    k = k % length;
    let pre = length - k;
    while (pre--) {
        pointer = pointer.next;
    }
    let newHead = pointer;
    tail.next = head;
    pointer.next = null;
    return newHead;
};
