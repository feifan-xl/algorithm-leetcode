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
 * @return {number[][]}
 */
var levelOrder = function(root) {

    if (root == null) return []
    let list = [root]
    let res = []
    while (list.length > 0) {
        let count = list.length
        let arr = []
        for (let i = 0; i < count; i++) {
            const tmp = list.shift()
            arr.push(tmp.val)
            if (tmp.left != null) list.push(tmp.left)
            if (tmp.right != null) list.push(tmp.right)
        }
        res.push(arr)
    }
    return res
};