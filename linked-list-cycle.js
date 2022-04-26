/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let hasCycle = false;
    while (head) {
        if (head.visited) {
            hasCycle = true;
            break;
        }
        head.visited = true;
        head = head.next;
    }
    return hasCycle;
};