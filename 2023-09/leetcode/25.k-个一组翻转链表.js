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
var reverseKGroup = function(head, k) {

    const myReverse = (head, tail) => {
        let prev = tail.next;
        let p = head;
        while (prev !== tail) {
            const nex = p.next;
            p.next = prev;
            prev = p;
            p = nex;
        }
        return [tail, head];
    }

    const tmp = new ListNode(0);
    tmp.next = head;
    let pre = tmp;
    
    while (head) {
        let tail = pre
        for (let i = 0; i < k; ++i) {
            tail = tail.next;
            if (!tail) {
                return tmp.next;
            }
        }
        const nex = tail.next;
        [head, tail] = myReverse(head, tail)
        pre.next = head
        tail.next = nex
        pre = tail
        head = tail.next
    }
    return tmp.next
};