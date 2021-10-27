/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
//  输入：head = [1,3,2]
//  输出：[2,3,1]
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
  let stack = []
  while (head !== null) {
    stack.push(head.val)
    head = head.next
  }
  return stack.reverse()
};