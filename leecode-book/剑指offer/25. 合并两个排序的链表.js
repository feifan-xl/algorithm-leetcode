/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let p1 = l1, p2 = l2, res = new ListNode(), temp = res
    while (p1 !== null && p2 !== null) {
        let val
        if (p1.val < p2.val) {
            val = p2.val
            p2 = p2.next
        } else {
            val = p1.val
            p1 = p1.next
        }
        res.val = val
        res.next = new ListNode()
        res = res.next
    }
    res = p1 !== null ? p1 : p2
    return temp
};