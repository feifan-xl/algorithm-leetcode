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
var sortList = function(head) {
    if (head == null) return null
    function sort (root) {
        if (root == null || root.next == null) return [root, root]
        const mid = findMid(root).val
        let l = new ListNode(), ol = l
        let r = new ListNode(), or = r
        let m = new ListNode(), om = m

        while (root) {
            if (root.val === mid) {
                m.next = root
                root = root.next
                m = m.next
            } else if (root.val > mid) {
                r.next = root
                root = root.next
                r = r.next
            } else {
                l.next = root
                root = root.next
                l = l.next
            }
        }
        l.next = null
        r.next = null
        m.next = null
        let res = new ListNode(), next = res
        if (ol.next) {
            const [h, t] = sort(ol.next)
            next.next = h
            next = t
        }
        if (om.next) {
            next.next = om.next
            next = findTail(om.next)
        }
        if (or.next) {
            const [h, t] = sort(or.next)
            next.next = h
            next = t
        }
        let tail = findTail(res.next)
        return [res.next, tail]
    }

    function findTail (root) {
        let tail = root
        while (tail.next) {
            tail = tail.next
        }
        return tail
    }

    function findMid (root) {
        let f = root, s = root
        while (f.next != null && f.next.next != null) {
            s = s.next
            f = f.next.next
        }
        return s
    }

    return sort(head)[0]
};