/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let res = 0
    function dfs (head, num) {
        if (head == null) return
        if (head.right == null && head.left == null) {
            res += num * 10 + head.val
            return
        }
        num = num *10 + head.val
        dfs(head.right, num)
        dfs(head.left, num)
    }

    dfs(root, 0)
    return res
};