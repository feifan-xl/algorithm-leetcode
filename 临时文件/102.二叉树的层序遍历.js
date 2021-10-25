/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let result = []
  function loop (root) {
    if (root === null )return null
    result.push(root.val)
    loop(root.left)
    loop(root.right)
  }
  loop(root)
  return result
};
// @lc code=end


// 02. 中序
function levelOrder (root) {
  let stack = []
  let result = []
  let node = root
  while (stack.length || node) {
    while (node) {
      result.push(node.val)
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    node = node.left
  }
}

// 03. 前序
function leverOrder (root) {
  let stack = []
  let result = []
  let node = root
  while (stack.length || node) {
    while (node) {
      stack.push(node)
      node = node.left
    }
    result.push(node.val)
    node = stack.pop()
    node = node.left
  }
}