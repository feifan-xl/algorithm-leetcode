/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    let res
    function dfs (root) {
        if (!root) return false
        const left = dfs(root.left)
        const right = dfs(root.right)
        if ((left && right)
            || ((root.val == q.val || root.val == p.val) && (left || right))
        )  {
            res = root
            return false
        }
        return left || right || (root.val == q.val || root.val == p.val)
    }
    dfs(root)
    return res
};