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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    
    if (root == null) return null

    if (root.val > key) {
        root.left = deleteNode(root.left, key)
        return root
    }
    if (root.val < key) {
        root.right = deleteNode(root.right, key)
        return root
    }
    if (root.val == key) {
        if (!root.left && !root.right) {
            return null;
        }
        if (!root.right) {
            return root.left;
        }
        if (!root.left) {
            return root.right;
        }
        let tmp = root.right, tmp2 = root.right;
        console.log(root)
        while (tmp.left) {
            tmp2 = tmp
            tmp = tmp.left
        }
        root.right = deleteNode(root.right, tmp.val)
        tmp.right = root.right
        tmp.left = root.left
        return tmp
    }
    return root
};