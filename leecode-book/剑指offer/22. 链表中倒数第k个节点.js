/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
    let temp = head, res = head
    while (k > 0 && temp !== null) {
        temp = temp.next
        k--
    }
    if (k !== 0) return null
    while (temp !== null) {
        temp = temp.next
        res = res.next
    }
    return res
};