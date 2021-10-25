/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
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
    if (head === null && head.next === null && head.next.next) return false
    let next = head.next.next
    while(next !== null && next.next !== null) {
      if(next === head) return true
      next = next.next.next
      head = head.next
    }
    return false
};
// @lc code=end

