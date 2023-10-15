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
 * @return {number[]}
 */
var inorderTraversal = function(root) {

    let res = []

    function dfs (head) {
        if (head === null) return
        dfs(head.left)
        res.push(head.val)
        dfs(head.right)
    }
    dfs(root)
    return res
};