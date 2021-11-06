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
 * @param {number} target
 * @return {number[][]}
 */
 var pathSum = function(root, target) {
    if (root.left === null && root.right === null) return root.val === target ? [root] : []
    let res = []

    const dfs = (root, path, sum) => {
        if (root.left === null && root.right === null && root.val === sum) {
            res.push(path.push(root))
        }
        if (root.left) {
            dfs(root.left, [...path, root.left], sum - root.val)
        }
        if (root.right) {
            dfs(root.right, [...path, root.right], sum - root.val)
        }
    }

    dfs(root, [], target)

    return res

};