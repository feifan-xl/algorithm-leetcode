/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  let cur = head, n = 1
  while (cur.next) {
    cur = cur.next
    n++
  }
  let len = n - k % n 
  if (len = n) return head
  cur.next = head
  while (len) {
    cur = cur.next
    len--
  }
  const ret = cur.next
  cur.next = null
  return ret
};
// @lc code=end

