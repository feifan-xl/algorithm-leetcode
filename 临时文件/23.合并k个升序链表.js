/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const prehead = new ListNode(-1);
  let prev = prehead;
  let len = lists.length
  while (true) {
    let min, temp
    for (let i = 0; i < len; i++) {
      if (lists[i]) {
        if (min === null) {
          min = lists[i]
          temp = i
        } else if (min >= lists[i]) {
          min = lists[i]
          temp = i
        }
      }
    }
    if (temp) {
      lists[temp] = lists[temp].next
    } else {
      return prev
    }
  }
};
// @lc code=end

