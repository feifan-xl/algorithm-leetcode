/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var levelOrder = function(root) {
     if (root === null) return []
     if (root.left === null && root.right === null) return [root.val]
    let res = [], stack = [root]
    while (stack.length !== 0) {
        let node = stack.shift()
        res.push(node.val)
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }
    return res
};