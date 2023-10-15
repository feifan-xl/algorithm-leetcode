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
var rightSideView = function(root) {
    if (root == null) return[]
    let res = []
    let arr = [root]
    while (arr.length > 0) {
        const size = arr.length
        let shift
        for (let i = 0; i < size; i++) {
            shift = arr.shift()
            if (shift.left != null) arr.push(shift.left)
            if (shift.right != null) arr.push(shift.right)
        }
        res.push(shift.val)
    }
    return res
};