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
var zigzagLevelOrder = function(root) {
    if (root == null) return []
    let res = []
    let list = [root]
    let isLeft = true

    while (list.length > 0) {
        const size = list.length
        
        const arr = []
        const tmpList = []
        for (let i = 0; i < size; i++) {
            const tmp = list.shift()
            if (isLeft) {
                arr.push(tmp.val)
            } else {
                arr.unshift(tmp.val)
            }
            if (tmp.left) tmpList.push(tmp.left)
            if (tmp.right) tmpList.push(tmp.right)
        }
        list = tmpList
        res.push(arr)
        isLeft = !isLeft
    }
    return res
};
