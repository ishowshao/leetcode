/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    let pointer;
    const sentry = new Node();
    const map = new Map();

    pointer = sentry;
    while (head) {
        const node = map.has(head) ? map.get(head) : new Node(head.val);
        const rNode = head.random !== null ? (map.has(head.random) ? map.get(head.random) : new Node(head.random.val)) : null;

        if (head.random) {
            map.set(head.random, rNode);
        }

        pointer.next = node;
        pointer.next.random = rNode;

        pointer = pointer.next;
        head = head.next;
    }
    return sentry.next;
};
