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
  let ans
  const dfs = (root, p, r) => {
    if (root === null) return false
    let l = dfs(root.left)
    let r = dfs(root.right)
    if ((l && r) || (root.val === q.val || root.val === p.val) && (l || r)) {
      ans = root
    }
    return l || r || (root.val === q.val || root.val === p.val) 
  }
  dfs(root, p, q)
};
