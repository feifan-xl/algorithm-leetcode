/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
    let max = q > p ? q: p
    let min = q > p ? p: q
    let current = root
    while (true) {
      if (max === current.val) {
        return current
      } else if (max > current.val) {
        current = current.right
      } else if (min < current.val) {
        current = current.left
      }
    }
};
// @lc code=end

