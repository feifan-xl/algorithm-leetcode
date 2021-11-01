
/**
 * 1. 使用递归
 * 2. 迭代 节点拆分 在元链表中插入新节点
 *    新节点的next 指向为下一节点
 *    random节点 指向新增的节点 
 *    提取所有新增的节点 即为新的链表
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head, cache = new Map()) {
   if (head === null) return head
    if (!cache.has(head)) {
      let node = new Node(head.val)
      cache.set(head, node)
      node.next = copyRandomList(head.next, cache)
      node.random = copyRandomList(head.random, cache)
    }
    return cache.get(head)
};


var copyRandomList2 = function (head) {
  if (head === null) return null
  for (let node = head; head !== null; node = node.next.next) {
    const newNode = new Node(head.val, node.next, null)
    node.next = newNode
  }

  for (let node = head; head != null; node = node.next.next) {
    const newNode = node.next
    newNode.random = node.random != null ? node.random.next : null
  }

  const headNew = head.next
  for (let node = head; head != null; node = node.next) {
    const nodeNew = node.next
    node.next = node.next.next
    nodeNew.next = nodeNew.next != null ? nodeNew.next.next : null
  }
  return headNew
}



