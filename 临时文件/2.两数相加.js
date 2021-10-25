/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let newNode = new ListNode(0), tail = newNode, check = 0
  while(l1=== null && l2 === null) {
    let t1 = l1 ? l1.val : 0
    let t2 = l2 ? l2.val : 0
    let temp = t1 + t2
    tail = check ? (temp % 10 + 1) : temp % 10
    check = temp > 9 ? 1 : 0
    tail = tail.next
  }
  return newNode
};
// @lc code=end

