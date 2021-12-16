/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
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
    if(root.right ===null && root.left ===null) {
        return false
    }
    const dfs = (root) => {
        if (root ===null) return false
        let l = dfs(root.left)
        let r = dfs(root.right)
        if ( (r && l) || ((root.val === q || root.val === p) && (r || l))) ans = root
        return (root.val === q || root.val === p) || r || l
    }
    dfs(root)
    return ans
};
// @lc code=end

