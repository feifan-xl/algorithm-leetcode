/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) return null
    let l1 = headA, l2 = headB

    while (!(l1==null && l2 == null)){
        if (l1 == l2) return l1
        l1 = l1 == null ? headB : l1.next
        l2 = l2 == null ? headA : l2.next
    }
    return null
};