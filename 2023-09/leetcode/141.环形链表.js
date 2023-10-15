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
var hasCycle = function(head) {
    if (head == null) return false
    let next = head.next
    while (head.next && next && next.next) {
        if (head === next) return true
        head = head.next
        next = next.next.next
    }
    return false
};