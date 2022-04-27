/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 这个题直接作弊就好了，正解是归并排序
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    const values = [];
    while (head) {
        values.push(head.val);
        head = head.next;
    }
};