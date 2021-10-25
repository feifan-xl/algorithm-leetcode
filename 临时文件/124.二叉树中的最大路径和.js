/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start
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
 * @return {number}
 */
var maxPathSum = function(root) {

  let max = -Infinity

  function maxGin (node) {
    if (node === null) return 0
    let left = Math.max(maxGin(node.left), 0)
    let right = Math.max(maxGin(node.right), 0)

    let temp = node.val + left + right

    max = Math.max(max, temp)

    return node.val + left + right
  }

  maxGin(root)
  return max
};
// @lc code=end

