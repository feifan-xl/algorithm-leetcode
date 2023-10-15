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

    function dfs (list, l, r) {
        if (l == r) return list[l]
        if (l === r - 1) return mergeToList(list[r], list[l])
        let mid = Math.floor((l + r) / 2)
        let left = dfs(list, l, mid)
        let right = dfs(list, mid + 1, r)
        return mergeToList(left, right)
    }

    function mergeToList (head1, head2) {
        let dummy = new ListNode(0);
        let cur = dummy;
        while (head1 && head2) {
            if (head1.val < head2.val) {
                cur.next = head1;
                head1 = head1.next;
            } else {
                cur.next = head2;
                head2 = head2.next;
            }
            cur = cur.next;
        }
        cur.next = head1 == null ? head2 : head1;
        return dummy.next
    }
    if (lists.length == 0) return null    
    return dfs(lists, 0, lists.length - 1)
};