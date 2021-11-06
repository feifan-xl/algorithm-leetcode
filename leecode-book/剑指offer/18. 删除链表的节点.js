/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
    if(head.val == val) return head.next
    let temp = head, pre = null
    while (temp.val !== val && temp !== null) {
        pre = temp
        temp = temp.next
    }
    if (temp.next !== null) {
        pre.next = temp.next
    } else {
        pre.next = null
    }
    return head
};