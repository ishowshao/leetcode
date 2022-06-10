/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const vals = [];
    while (head) {
        vals.push(head.val);
        head = head.next;
    }
    let half = Math.ceil(vals.length / 2);
    let is = true;
    for (let i = 0; i < half; i++) {
        if (vals[i] !== vals[vals.length - 1 - i]) {
            is = false;
            break;
        }
    }
    return is;
};
