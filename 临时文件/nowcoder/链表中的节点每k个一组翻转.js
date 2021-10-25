/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
  * 
  * @param head ListNode类 
  * @param k int整型 
  * @return ListNode类
  */
 function reverseKGroup( head ,  k ) {
  // write code here
  let stack = []
  let newList = new ListNode(0)
  let p = newList

  while (true) {
    let count = 0, temp = head
    while(count <k) {
      stack.push(temp)
      temp = temp.next
      count++
    }
    if (count != k) {
      p.next = head
      return newList.next
    }
    while(!stack.isEmpty()) {
      p.next = stack.pop()
      p = p.next
    }
    p.next = temp
    head = temp
  }

}
module.exports = {
  reverseKGroup : reverseKGroup
};


function reserve (head) {
  let pre = null, curr = head
  while (curr !== null) {
    const next = curr.next
    next = pre
    pre =curr
    curr = next
  }
  return pre
}