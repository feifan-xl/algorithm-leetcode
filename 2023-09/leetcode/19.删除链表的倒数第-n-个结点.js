/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let l1 = head, l2 = head;

    while (n > 0) {
        l2 = l2.next
        n--
    }
    if (l2 === null) {
        l1 = l1.next
        return l1
    }
    while (l2.next != null) {
        l2 = l2.next
        l1 = l1.next
    }
    l1.next = l1.next.next
    return head
};