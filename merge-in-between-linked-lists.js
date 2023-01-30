/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
    let pointer = list1;
    let index = 0;
    let ap = null;
    let bp = null;
    let list2Head = list2;
    while (pointer.next) {
        if (index === a - 1) {
            ap = pointer;
        }
        if (index === b) {
            bp = pointer;
        }
        pointer = pointer.next;
        index++;
    }
    while (list2.next) {
        list2 = list2.next;
    }
    list2.next = bp.next;
    ap.next = list2Head;
    return list1;
};
