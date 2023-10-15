/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

    // 找中间
    // 后面的旋转
    // 合并两个链表
    if (head == null) return
    let mid = middleNode(head)
    let l1 = head, l2 = mid.next
    mid.next = null
    l2 = reverseList(l2)
    mergeList(l1, l2)


    function middleNode (head) {
        let slow = head, fast = head
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }
    function reverseList (head) {
        let prev = null, cur = head

        while (cur) {
            const tmp = cur.next
            cur.next = prev
            prev = cur
            cur = tmp
        }
        return prev
    }

    function mergeList (l1, l2) {
        let tmp1, tmp2
        while (l1 != null && l2 != null) {
            tmp1 = l1.next
            tmp2 = l2.next

            l1.next = l2
            l1 = tmp1
            
            l2.next = l1
            l2 = tmp2
        }
    }
};