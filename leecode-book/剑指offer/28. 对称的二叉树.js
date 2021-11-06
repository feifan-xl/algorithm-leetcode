/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    return root === null || recur(root.left, root.right)
};

function recur(L, R) {
    if (L === null && R === null) return true
    if (L === null || R === null || R.val !== L.val) return false
    return recur(L.left, R.right) && recur(L.right, R.left)
}