/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const nodes1 = [];
    if (list1) {
        nodes1.push(list1);
        while (list1.next) {
            list1 = list1.next;
            nodes1.push(list1);
        }
    }
    
    const nodes2 = [];
    if (list2) {
        nodes2.push(list2);
        while (list2.next) {
            list2 = list2.next;
            nodes2.push(list2);
        }
    }

    const nodes = [...nodes1, ...nodes2];
    nodes.sort((a, b) => a.val - b.val);
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    return nodes[0] || null;
};