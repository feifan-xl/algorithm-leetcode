/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    let dummty = new ListNode()
    dummty.next = head
    let cur = dummty
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            const x = cur.next.val
            while(cur.next && cur.next.val == x) {
                cur.next = cur.next.next
            }
        } else {
            cur = cur.next
        }
    }
    return dummty.next
};